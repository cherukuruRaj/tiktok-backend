const VideoInfo = require('../models/videoinfomodel');
const UserInfo = require('../models/userinfomodel');



module.exports = async function getAllVideoInfo(req, res) {
    try {
        const { filter, color } = req.query;

        console.log("this hte filter and color", filter, color);

        let videoInfo="";


        if(color=="all"){
            videoInfo = await VideoInfo.find({ category: filter});
        }
        else{
            videoInfo = await VideoInfo.find({ category: filter, region: color});
        }   

        console.log("did we get the videofin data")
        


        const userInfo = await UserInfo.find();

        let totallikes = 0;

        let totalcomments = 0;
        let totalshares = 0;

        videoInfo.forEach((video) => {
            totallikes += video.likes;
            totalcomments += video.commentCount;
            totalshares += video.shareCount;
            const url = video.url;
            var regex = /@([^/]+)/;
            var match = url.match(regex);
            let extractedString = " ";
            if (match) {
                extractedString = match[1];
            }
            const singleUser = userInfo.find((user) => user.uniqueId == extractedString);
            if (singleUser) {
                video.userName = singleUser.name;
                video.avatar = singleUser.avatar;
                video.userUrl = singleUser.url;
                video.uniqueId = singleUser.uniqueId;
            }
        });

        let totalVidoes=videoInfo.length;

        const total = [totallikes, totalcomments, totalshares, totalVidoes];

        console.log(videoInfo)


        res.status(200).json({ videoInfo, total });

    } catch (error) {
        res.status(500).json({ message: 'Failed to get VideoInfo', error: error.message });
        console.log("we did not get the data")
    }
};