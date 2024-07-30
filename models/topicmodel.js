const mongoose = require('mongoose');

// Define schemas for the nested structures
const BoundingBoxSchema = new mongoose.Schema({
  type: [Number]
});

const DetectedFaceSchema = new mongoose.Schema({
  frame_number: { type: Number },
  timestamp: { type: Number },
  length: { type: Number },
  attr_val: { type: String },
  bounding_box: [BoundingBoxSchema]
});

const GeneratedDescriptionSchema = new mongoose.Schema({
  frame_number: { type: Number },
  timestamp: { type: Number },
  length: { type: Number },
  attr_val: { type: String }
});

const CapturedOCRSchema = new mongoose.Schema({
  frame_number: { type: Number },
  timestamp: { type: String },
  length: { type: Number },
  attr_val: { type: String }
});

const AudioDescriptionSchema = new mongoose.Schema({
  frame: { type: Number },
  timestamp: { type: String },
  length: { type: Number },
  attr_val: [{
    type: { type: String },
    confidence: { type: Number }
  }]
});

const CapturedTranscriptionSchema = new mongoose.Schema({
  frame_number: { type: Number },
  timestamp: { type: String },
  length: { type: Number },
  attr_val: { type: String }
});

const AttachedMediaSchema = new mongoose.Schema({
  attr_val: {
    detected_faces: [DetectedFaceSchema],
    detected_flags: [DetectedFaceSchema],
    generated_description: [GeneratedDescriptionSchema],
    audio_description: [AudioDescriptionSchema],
    captured_transcription: [CapturedTranscriptionSchema],
    captured_ocr: [CapturedOCRSchema]
  },
  location: { type: String },
  type: { type: String }
});

const TweetSchema = new mongoose.Schema({
  tweet_id: { type: String, required: true },
  content: { type: String, required: true },
  url: { type: String, required: true },
  attached_media: AttachedMediaSchema,
  reply_count: { type: Number },
  retweet_count: { type: Number },
  resultant: { type: Number },
  like_count: { type: Number }
});

const TopicSchema = new mongoose.Schema({
  attr_val: { type: String, required: true },
  tweets: [TweetSchema]
});

const CampSchema = new mongoose.Schema({
  attr_val: { type: String, required: true },
  topics: [TopicSchema]
});

const topicsModelSchema = new mongoose.Schema({
  camps: [CampSchema]
});



module.exports = mongoose.model('TopicInfo', topicsModelSchema);