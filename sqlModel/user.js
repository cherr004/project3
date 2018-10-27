var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {
    // Giving the User model a uuid of type UUIDV4
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    // Users first_name, type STRING
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,50]
    },
    // Users last_name, type STRING
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,50]
    },
    // Users address, type STRING
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,50]
    },
    // Users city, type STRING
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,50]
    },
    // Users state, type STRING
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2]
    },
    // Users primPhone, type STRING
    primPhone: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [14]
    },
    // Users ssn, type STRING
    ssn: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [10]
    },
    // Users joinDate, type DATEONLY
    joinDate: {
      type: DataTypes.DATEONLY
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
  });

  User.prototype.validPassword = function(password){
      return bcrypt.compareSync(password,this.password);
  }

  User.hook("beforeCreate", function(user){
      user.password= bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  })




  return User;
};
