const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mixr"
);

const accountSeed = [
  {
    firstName: "John",
    lastName: "Doe",
    dob: new Date(Date.now()),
    address: {
      street: "123 Rodeo Dr",
      city: "Los Angeles",
      stateOfRes: "CA",
      zip: "90210"
    },
    billingInfo: {
      nameOnCard: "John Doe",
      cardType: "Visa",
      number: 4217852032834100,
      expiration: {
        month: 03,
        year: 19
      },
      ccv: 221
    },
    joinDate: new Date(Date.now()),
    packsRcvd: 0,
    packages: {
      tier: 3,
      preference: "whiskey"
    },
    email: "johndoe@gmail.com",
    password: "password"
  },
  {
    firstName: "Mike",
    lastName: "Smith",
    dob: new Date(Date.now()),
    address: {
      street: "6789 514th St",
      city: "Miami",
      stateOfRes: "FL",
      zip: "33151"
    },
    billingInfo: {
      nameOnCard: "Mike Smith",
      cardType: "Mastercard",
      number: 5729687342110398,
      expiration: {
        month: 1,
        year: 21
      },
      ccv: 567
    },
    joinDate: new Date(Date.now()),
    packsRcvd: 3,
    packages: {
      tier: 2,
      preference: "vodka"
    },
    email: "mikesmith@gmail.com",
    password: "password"
  }
];

db.Account
  .insertMany(accountSeed)
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
