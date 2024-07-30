const mongoose = require('mongoose');

const videoInfoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    dynamicCover: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    shareCount: {
        type: Number,
        required: true
    },
    commentCount: {
        type: Number,
        required: true
    },
    playCount: {
        type: Number,
        required: true
    },
    collectCount: {
        type: String,
        required: true
    },
    locationCreated: {
        type: String,
        required: true
    },
    userName: {
        type: String,
    },
    avatar: {
        type: String,
    },
    camp:{
        type:String,
    },
    category:{
        type:String,
    },
    country:{
        type:String,
    },
    region:{
        type:String,
    },
    userUrl:{
        type:String,
    },
    uniqueId:{
        type:String,
    }
});


module.exports = mongoose.model('VideoInfo', videoInfoSchema);
