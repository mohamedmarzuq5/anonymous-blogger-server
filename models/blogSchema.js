const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 3,
        max: 21,
        required: true,
    },
    content: {
        type: String,
        min: 99,
        required: true,
    },
    createdAt: {
        type: Number,
        immutable: true,
        default: () => Date.now(),
    },
    approved: {
        type: Boolean,
        default: false,
    },
    viewers: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("Blog", blogSchema);
