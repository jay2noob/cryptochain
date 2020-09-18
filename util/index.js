const EC = require("elliptic").ec;

const ec = new EC("secp25k1");

module.exports = { ec };
