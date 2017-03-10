/**
 * @author Liavontsi Brechka
 * @studentID 300800345
 * @date March 6, 2017
 * @description Personal Portfolio website component with Business Contact List – Authentication
 */


let mongoose = require('mongoose');

// create a model class
let businessContactsSchema = mongoose.Schema({
        contactName: String,
        contactNumber: String,
        email: String,
    },
    {
        collection: "businessContacts"
    });

module.exports = mongoose.model('businessContacts', businessContactsSchema);
