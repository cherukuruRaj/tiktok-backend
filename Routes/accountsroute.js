const express = require('express');

const getAllUsers = require('../controller/userinfocontroller');

const getAllVideoInfo= require('../controller/videoinfocontroller');

const {postNarrative} = require('../controller/narrativecontroller')

const getTopics = require("../controller/topiccontroller")

const router = express.Router();



// Route handler
router.get('/userdata', getAllUsers);

router.get('/videodata', getAllVideoInfo);

router.get('/narrative', postNarrative)

router.get('/topic', getTopics)


module.exports = router;