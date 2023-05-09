const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
        content: {
            type: String,
            min: 99,
            required: true
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
        viewers: Number,
});

module.exports = mongoose.model("Blog", blogSchema);
