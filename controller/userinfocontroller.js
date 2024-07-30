const UserInfo = require('../models/userinfomodel');
const VideoInfo = require('../models/videoinfomodel');



module.exports = async function getAllUsers(req, res) {
    try {
        let users = await UserInfo.find();
        const videoInfo = await VideoInfo.find();

        const {filter} = req.query;


        users.forEach((user) => {

            let singleVideo= videoInfo.find((video)=>{
                const url = video.url;
                var regex = /@([^/]+)/;
                var match = url.match(regex);
                let extractedString = " ";
                if (match) {
                extractedString = match[1];
                }
                return user.uniqueId === extractedString;
            })
            
            if(singleVideo) {
                
                user.category = singleVideo.category;
            }
            
        });


        if(filter){
            users=users.filter((user)=>user.category===filter);
        }
        
        console.log(users);
        console.log("this is the filter", filter);

        res.status(200).json(users);




    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};


