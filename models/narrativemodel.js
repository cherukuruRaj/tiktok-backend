// models/Narrative.js
const mongoose = require('mongoose');
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
  like_count: { type: Number },
  quote_count: { type: Number }
});

const NarrativeItemSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  title: { type: String, required: true },
  narrative: { type: String, required: true },
  triplet: { type: String, required: true },
  score: { type: Number, required: true },
  total_engagement: { type: Number, required: true },
  tweets: [TweetSchema]
});

const NarrativeSchema = new mongoose.Schema({
  narratives: [NarrativeItemSchema]
});

const Narrative = mongoose.model('Narrative', NarrativeSchema);

module.exports = Narrative;
