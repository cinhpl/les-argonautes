const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Member', MemberSchema);