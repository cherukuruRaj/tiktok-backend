const mongoose = require('mongoose');

const userinfoschema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    uniqueId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    follower_count: {
        type: Number,
        required: true
    },
    following_count: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    friendCount: {
        type: Number,
        required: true
    },
    videoCount: {
        type: Number,
        required: true
    },
    category:{
        type:String,
    }
});

module.exports = mongoose.model('UserInfo', userinfoschema);