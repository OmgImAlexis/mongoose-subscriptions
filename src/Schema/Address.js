const mongoose = require("mongoose");
const shortid = require("shortid");
const ProcessorItem = require("./ProcessorItem");
const originals = require("mongoose-originals");

const Address = new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate,
    },
    processor: {
        type: ProcessorItem,
        default: ProcessorItem,
    },
    phone: String,
    company: String,
    name: String,
    country: String,
    locality: String,
    streetAddress: String,
    extendedAddress: String,
    postalCode: String,
    createdAt: Date,
    updatedAt: Date,
});

Address.plugin(originals, {
    fields: [
        "phone",
        "company",
        "name",
        "country",
        "locality",
        "streetAddress",
        "extendedAddress",
        "postalCode",
    ],
});

module.exports = Address;
