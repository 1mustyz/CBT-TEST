const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const SubjectSchema = new Schema({
    subjectName: { type: String, required: true},
    subjectId: { type: String, required: true},
    question: [{type: Object}],
}, { timestamps: true });

//plugin passport-local-mongoose to enable password hashing and salting and other things
SubjectSchema.plugin(passportLocalMongoose);

//connect the schema with user table
const Subjectdb = mongoose.model('subjectdb', SubjectSchema);

//export the model 
module.exports = Subjectdb;