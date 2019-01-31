const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {type: String, required: true, max: 255},
    description: {type: String, required: true},
    author: {type: String, required: true},
    tags: { type : Array , "default" : [] },
    created_at    : { type: Date, required: true, default: Date.now },
    updated_at    : { type: Date, required: true, default: Date.now },
});

// Export the model
module.exports = mongoose.model('Article', ArticleSchema);