const mongoose = require("mongoose"),
      User     = require("./user"),
      Comment  = require("./comment");

const Post = new mongoose.Schema({
    title: String,
    author: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
    }],
    body: String,
    category: {
        type: String,
        enum: ["Natural", "Cultural", "Events", "Man-Made"]
    },
    image: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    date: { type: Date, default: Date.now },
    url: String
});

module.exports = mongoose.model("Post", Post);