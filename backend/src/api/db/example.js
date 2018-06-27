const Types = require('mongoose').SchemaTypes;
const mongoose = require('mongoose');
const Example = mongoose.Schema({
    name: { type: Types.String, require: true },
    type: { type: Types.String, require: true }
})
module.exports = mongoose.model('example', Example);