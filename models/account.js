const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1000;

const accountSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dob: {type: Date, default: Date.now},
  address: {
    street: {type: String, required: true},
    city: {type: String, required: true},
    stateOfRes: {type: String, required: true},
    zip: {type: Number, required: true}
  },
  billingInfo: {
    nameOnCard: {type: String, required: true},
    cardType: {type: String, required: true},
    number: {type: Number, required: true},
    expiration: {
      month: {type: Number, required: true},
      year: {type: Number, required: true}
    },
    ccv: {type: Number, required: true}
  },
  joinDate: {type: Date, required: true},
  packsRcvd: {type: Number, required: true},
  packages: {
    tier: {type: Number, required: true},
    preference: {type: String, required: true}
  },
  email: {type: String, required: true},
  password: {type: String, required: true},
  loginAttempts: {type: Number,required: true, default: 0},
  lockUntil: {type: Number}
});

accountSchema.virtual('isLocked').get(function() {
  // check for a future lockUntil timestamp
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

accountSchema.pre('save', ()=>{
      const account = this;
      // only hash the password if it has been modified (or is new)
      if (!account.isModified('password')) return next();

      // generate a salt
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(account.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          account.password = hash;
          next();
        });
    });
});

accountSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

accountSchema.methods.incLoginAttempts = function(cb) {
    // if we have a previous lock that has expired, restart at 1
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return this.update({
            $set: { loginAttempts: 1 },
            $unset: { lockUntil: 1 }
        }, cb);
    }
    // otherwise we're incrementing
    var updates = { $inc: { loginAttempts: 1 } };
    // lock the account if we've reached max attempts and it's not locked already
    if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        updates.$set = { lockUntil: Date.now() + LOCK_TIME };
    }
    return this.update(updates, cb);
};

// expose enum on the model, and provide an internal convenience reference
var reasons = accountSchema.statics.failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
};

accountSchema.statics.getAuthenticated = function(email, password, cb) {
    this.findOne({ email: email }, function(err, account) {
        if (err) return cb(err);

        // make sure the account exists
        if (!account) {
            return cb(null, null, reasons.NOT_FOUND);
        }

        // check if the account is currently locked
        if (account.isLocked) {
            // just increment login attempts if account is already locked
            return account.incLoginAttempts(function(err) {
                if (err) return cb(err);
                return cb(null, null, reasons.MAX_ATTEMPTS);
            });
        }

        // test for a matching password
        account.comparePassword(password, function(err, isMatch) {
            if (err) return cb(err);

            // check if the password was a match
            if (isMatch) {
                // if there's no lock or failed attempts, just return the account
                if (!account.loginAttempts && !account.lockUntil) return cb(null, account);
                // reset attempts and lock info
                var updates = {
                    $set: { loginAttempts: 0 },
                    $unset: { lockUntil: 1 }
                };
                return account.update(updates, function(err) {
                    if (err) return cb(err);
                    return cb(null, account);
                });
            }

            // password is incorrect, so increment login attempts before responding
            account.incLoginAttempts(function(err) {
                if (err) return cb(err);
                return cb(null, null, reasons.PASSWORD_INCORRECT);
            });
        });
    });
};

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
