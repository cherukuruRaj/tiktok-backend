const Narrative = require('../models/narrativemodel');
const topicmodel = require('../models/topicmodel');



exports.postNarrative = async (req, res) => {

    // const document = await Narrative.find();

    //     const result= document[0].narratives;
    //         let narrativetweets=[];    
    
    
    //     const final= result.map((f)=>{
    //         if(f.title === "Civilians Impacted by Ukrainian Attacks in Crimea and Sevastopol"){
    //             f.tweets.map((single)=>{
    //                 narrativetweets.push(single);
                    
    
    //             })
    //         }
    //     })



    //  return res.send({narrativetweets});

    const { filter, narrativeFilter, name, isCheckedImage, isCheckedVideo } = req.query;

    if(filter === "NONE"){
        filter === ""
    }
    if(narrativeFilter === "NONE"){
        narrativeFilter === ""
    }


    let reply=0;
    let likes=0;
    let retweets=0;

    try {


    const document = await Narrative.find();

    const result= document[0].narratives;
        let narrativetweets=[];
    let COUNT=0;



    const final= result.map((f)=>{
        if(f.title === narrativeFilter){
            f.tweets.map((single)=>{
                narrativetweets.push(single);
                

            })
        }
    })



    let nameTweets=[];
    

    if(name !== "NONE"){

    narrativetweets.map((single)=>{
        let isNameVisible=false;
        if (single.attached_media.length > 0 && single.attached_media[0].detected_faces) {
            single.attached_media[0].detected_faces.map((single) => {
              if (single.attr_val === name) {
                isNameVisible = true;
              }
            });

          }

          if(isNameVisible){
            nameTweets.push(single);
            console.log(single)
          }


    })

    }

    else{
        nameTweets=narrativetweets;
    }


    narrativetweets=nameTweets;





let medianarrtivetweets = [];


if(isCheckedImage=="false" && isCheckedVideo=="false"){
    console.log("Inside both video and image false condition");
    medianarrtivetweets=narrativetweets;
    medianarrtivetweets.map((single)=>{
        reply+=single.reply_count;
                likes+=single.like_count;
                retweets+=single.retweet_count;
    })
}

else if (isCheckedVideo=="true" && isCheckedImage=="true"){
    narrativetweets.map((single)=>{
        if (single.attached_media.length > 0 && single.attached_media[0].location){
            let ext = single.attached_media[0].location.split('.').pop().toLowerCase();
            if (ext === "mp4" || ext === "jpg" || ext === "png") {
                console.log("Inside both video and image true condition");
                medianarrtivetweets.push(single);
                reply+=single.reply_count;
                likes+=single.like_count;
                retweets+=single.retweet_count;
              }
        }
    })
}

else if (isCheckedVideo=="true" && isCheckedImage=="false"){
    narrativetweets.map((single)=>{
        if (single.attached_media.length > 0 && single.attached_media[0].location){
            let ext = single.attached_media[0].location.split('.').pop().toLowerCase();
            if (ext === "mp4") {
                console.log("Inside video true condition");
                medianarrtivetweets.push(single);
                reply+=single.reply_count;
                likes+=single.like_count;
                retweets+=single.retweet_count;
              }
        }
    })
}

else{
    narrativetweets.map((single)=>{
        if (single.attached_media.length > 0 && single.attached_media[0].location){
            let ext = single.attached_media[0].location.split('.').pop().toLowerCase();
            if (ext === "jpg" || ext === "png") {
                console.log("Inside image true condition");
                medianarrtivetweets.push(single);
                reply+=single.reply_count;
                likes+=single.like_count;
                retweets+=single.retweet_count;
              }
        }
    })

}

narrativetweets=medianarrtivetweets;

tweets=[];



const t = await Narrative.find();
const t1= t[0].narratives;


const mymap = new Map();
demo=[];

t1.forEach((single) => {
    demo.push(single.title);
  
});

console.log(demo)

       
console.log("we ar inside the narratgive controller")

        
            
        res.status(200).send({tweets, narrativetweets, reply, likes, retweets});
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
  };