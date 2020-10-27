

let mongoose = require('mongoose');

// create a model class
let businessContactsSchema = mongoose.Schema({
        contactName: String,
        contactNumber: String,
        email: String,
    },
    {
        collection: "businesscontact"
    });

module.exports = mongoose.model('businesscontact', businessContactsSchema);
