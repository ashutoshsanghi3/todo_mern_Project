const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean,
},{collection:'todoSchema',
versionKey: false
});

const ToDo = mongoose.model("ToDo",todoSchema);

module.exports = { ToDo };
