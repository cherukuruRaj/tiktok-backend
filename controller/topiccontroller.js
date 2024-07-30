
const Narrative = require("../models/narrativemodel");
const topicmodel = require("../models/topicmodel");

const narrativeArray = [
    {
        "title": "Nuclear Tensions: Global Powers on the Brink",
        "imagepos": "Nuclear_Tensions:_Global_Powers_on_the_Brink_positive.png",
        "imageneg": "Nuclear_Tensions:_Global_Powers_on_the_Brink_negative.png"
    },
    {
        "title": "Russia's Battle Against Nazism for Humanity",
        "imagepos": "Russia's_Battle_Against_Nazism_for_Humanity_positive.png",
        "imageneg": "Russia's_Battle_Against_Nazism_for_Humanity_negative.png"
    },
    {
        "title": "Civilians Impacted by Ukrainian Attacks in Crimea and Sevastopol",
        "imagepos": "Civilians_Impacted_by_Ukrainian_Attacks_in_Crimea_and_Sevastopol_positive.png",
        "imageneg": "Civilians_Impacted_by_Ukrainian_Attacks_in_Crimea_and_Sevastopol_negative.png"
    },
    {
        "title": "Nazism in the Ukraine Conflict",
        "imagepos": "Nazism_in_the_Ukraine_Conflict_positive.png",
        "imageneg": "Nazism_in_the_Ukraine_Conflict_negative.png"
    },
    {
        "title": "Foreign Mercenaries in the Ukraine are Eliminated",
        "imagepos": "Foreign_Mercenaries_in_the_Ukraine_are_Eliminated_positive.png",
        "imageneg": "Foreign_Mercenaries_in_the_Ukraine_are_Eliminated_negative.png"
    },
    {
        "title": "West is Corrupt and Causes Death in Ukraine Conflict",
        "imagepos": "West_is_Corrupt_and_Causes_Death_in_Ukraine_Conflict_positive.png",
        "imageneg": "West_is_Corrupt_and_Causes_Death_in_Ukraine_Conflict_negative.png"
    },
    {
        "title": "US has Double Standards in Global Conflicts",
        "imagepos": "US_has_Double_Standards_in_Global_Conflicts_positive.png",
        "imageneg": "US_has_Double_Standards_in_Global_Conflicts_negative.png"
    },
    {
        "title": "Mercenaries and Atrocities in Ukraine",
        "imagepos": "Mercenaries_and_Atrocities_in_Ukraine_positive.png",
        "imageneg": "Mercenaries_and_Atrocities_in_Ukraine_negative.png"
    },
    {
        "title": "Nazism and the Bandera Ideology in Ukraine Conflict",
        "imagepos": "Nazism_and_the_Bandera_Ideology_in_Ukraine_Conflict_positive.png",
        "imageneg": "Nazism_and_the_Bandera_Ideology_in_Ukraine_Conflict_negative.png"
    },
    {
        "title": "Biden Family's Foreign Influence and Corruption",
        "imagepos": "Biden_Family's_Foreign_Influence_and_Corruption_positive.png",
        "imageneg": "Biden_Family's_Foreign_Influence_and_Corruption_negative.png"
    },
    {
        "title": "US Rejects Peace Deal Despite Americans Desire",
        "imagepos": "US_Rejects_Peace_Deal_Despite_Americans_Desire_positive.png",
        "imageneg": "US_Rejects_Peace_Deal_Despite_Americans_Desire_negative.png"
    },
    {
        "title": "Global Push for Ceasefire",
        "imagepos": "Global_Push_for_Ceasefire_positive.png",
        "imageneg": "Global_Push_for_Ceasefire_negative.png"
    },
    {
        "title": "So-Called 'Humanitarian' Aid in Global Conflicts",
        "imagepos": "So-Called_'Humanitarian'_Aid_in_Global_Conflicts_positive.png",
        "imageneg": "So-Called_'Humanitarian'_Aid_in_Global_Conflicts_negative.png"
    },
    {
        "title": "Swiss Peace Summit Highlights Divisions Over Ukraine War",
        "imagepos": "Swiss_Peace_Summit_Highlights_Divisions_Over_Ukraine_War_positive.png",
        "imageneg": "Swiss_Peace_Summit_Highlights_Divisions_Over_Ukraine_War_negative.png"
    },
    {
        "title": "China's Advocacy for a Political Settlement in the Ukraine Crisis",
        "imagepos": "China's_Advocacy_for_a_Political_Settlement_in_the_Ukraine_Crisis_positive.png",
        "imageneg": "China's_Advocacy_for_a_Political_Settlement_in_the_Ukraine_Crisis_negative.png"
    },
    {
        "title": "Ukraine's Unit No. 110: Horrifying Crimes Against Humanity",
        "imagepos": "Ukraine's_Unit_No._110:_Horrifying_Crimes_Against_Humanity_positive.png",
        "imageneg": "Ukraine's_Unit_No._110:_Horrifying_Crimes_Against_Humanity_negative.png"
    },
    {
        "title": "NATO will Punish China",
        "imagepos": "NATO_will_Punish_China_positive.png",
        "imageneg": "NATO_will_Punish_China_negative.png"
    },
    {
        "title": "Laurent Brayard warns French Mercenaries in Ukraine",
        "imagepos": "Laurent_Brayard_warns_French_Mercenaries_in_Ukraine_positive.png",
        "imageneg": "Laurent_Brayard_warns_French_Mercenaries_in_Ukraine_negative.png"
    },
    {
        "title": "Diplomatic Efforts for Peace in Nizhny Novgorod",
        "imagepos": "Diplomatic_Efforts_for_Peace_in_Nizhny_Novgorod_positive.png",
        "imageneg": "Diplomatic_Efforts_for_Peace_in_Nizhny_Novgorod_negative.png"
    },
    {
        "title": "Key Nations Refuse to Sign Final Declaration",
        "imagepos": "Key_Nations_Refuse_to_Sign_Final_Declaration_positive.png",
        "imageneg": "Key_Nations_Refuse_to_Sign_Final_Declaration_negative.png"
    }
]


const topicArray = [
    {
        "title": "MISSILES",
        "imagepos": "MISSILES_positive.png",
        "imageneg": "MISSILES_negative.png"
    },
    {
        "title": "CRIME",
        "imagepos": "CRIME_positive.png",
        "imageneg": "CRIME_negative.png"
    },
    {
        "title": "NUCLEAR",
        "imagepos": "NUCLEAR_positive.png",
        "imageneg": "NUCLEAR_negative.png"
    },
    {
        "title": "DEMOCRACY",
        "imagepos": "DEMOCRACY_positive.png",
        "imageneg": "DEMOCRACY_negative.png"
    },
    {
        "title": "ECONOMY",
        "imagepos": "ECONOMY_positive.png",
        "imageneg": "ECONOMY_negative.png"
    },
    {
        "title": "ARMED FORCES",
        "imagepos": "ARMED FORCES_positive.png",
        "imageneg": "ARMED FORCES_negative.png"
    },
    {
        "title": "WAR",
        "imagepos": "WAR_positive.png",
        "imageneg": "WAR_negative.png"
    },
    {
        "title": "CIVILIANS",
        "imagepos": "CIVILIANS_positive.png",
        "imageneg": "CIVILIANS_negative.png"
    },
    {
        "title": "DEFENSE",
        "imagepos": "DEFENSE_positive.png",
        "imageneg": "DEFENSE_negative.png"
    },
    {
        "title": "ATTACKS",
        "imagepos": "ATTACKS_positive.png",
        "imageneg": "ATTACKS_negative.png"
    },
    {
        "title": "GOVERNMENT",
        "imagepos": "GOVERNMENT_positive.png",
        "imageneg": "GOVERNMENT_negative.png"
    },
    {
        "title": "DIPLOMACY",
        "imagepos": "DIPLOMACY_positive.png",
        "imageneg": "DIPLOMACY_negative.png"
    },
    {
        "title": "AGREEMENT",
        "imagepos": "AGREEMENT_positive.png",
        "imageneg": "AGREEMENT_negative.png"
    },
    {
        "title": "TRUTH",
        "imagepos": "TRUTH_positive.png",
        "imageneg": "TRUTH_negative.png"
    },
    {
        "title": "ALLIANCE",
        "imagepos": "ALLIANCE_positive.png",
        "imageneg": "ALLIANCE_negative.png"
    },
    {
        "title": "PEACE",
        "imagepos": "PEACE_positive.png",
        "imageneg": "PEACE_negative.png"
    },
    {
        "title": "NATION",
        "imagepos": "NATION_positive.png",
        "imageneg": "NATION_negative.png"
    },
    {
        "title": "INTERNATIONAL",
        "imagepos": "INTERNATIONAL_positive.png",
        "imageneg": "INTERNATIONAL_negative.png"
    },
    {
        "title": "LIFE",
        "imagepos": "LIFE_positive.png",
        "imageneg": "LIFE_negative.png"
    },
    {
        "title": "NAZISM",
        "imagepos": "NAZISM_positive.png",
        "imageneg": "NAZISM_negative.png"
    },
    {
        "title": "MEDIA",
        "imagepos": "MEDIA_positive.png",
        "imageneg": "MEDIA_negative.png"
    },
    {
        "title": "FAMILY",
        "imagepos": "FAMILY_positive.png",
        "imageneg": "FAMILY_negative.png"
    },
    {
        "title": "WEAPONS",
        "imagepos": "WEAPONS_positive.png",
        "imageneg": "WEAPONS_negative.png"
    },
    {
        "title": "RESOURCES",
        "imagepos": "RESOURCES_positive.png",
        "imageneg": "RESOURCES_negative.png"
    },
    {
        "title": "SPACE",
        "imagepos": "SPACE_positive.png",
        "imageneg": "SPACE_negative.png"
    },
    {
        "title": "INFRASTRUCTURE",
        "imagepos": "INFRASTRUCTURE_positive.png",
        "imageneg": "INFRASTRUCTURE_negative.png"
    },
    {
        "title": "INTEL",
        "imagepos": "INTEL_positive.png",
        "imageneg": "INTEL_negative.png"
    },
    {
        "title": "JUSTICE",
        "imagepos": "JUSTICE_positive.png",
        "imageneg": "JUSTICE_negative.png"
    },
    {
        "title": "AID",
        "imagepos": "AID_positive.png",
        "imageneg": "AID_negative.png"
    },
    {
        "title": "CONFLICT",
        "imagepos": "CONFLICT_positive.png",
        "imageneg": "CONFLICT_negative.png"
    },
    {
        "title": "CORRUPTION",
        "imagepos": "CORRUPTION_positive.png",
        "imageneg": "CORRUPTION_negative.png"
    },
    {
        "title": "RELIGION",
        "imagepos": "RELIGION_positive.png",
        "imageneg": "RELIGION_negative.png"
    },
    {
        "title": "SAFETY",
        "imagepos": "SAFETY_positive.png",
        "imageneg": "SAFETY_negative.png"
    },
    {
        "title": "HISTORY",
        "imagepos": "HISTORY_positive.png",
        "imageneg": "HISTORY_negative.png"
    },
    {
        "title": "TERROR",
        "imagepos": "TERROR_positive.png",
        "imageneg": "TERROR_negative.png"
    },
    {
        "title": "ENVIRONMENT",
        "imagepos": "ENVIRONMENT_positive.png",
        "imageneg": "ENVIRONMENT_negative.png"
    },
    {
        "title": "COVID",
        "imagepos": "COVID_positive.png",
        "imageneg": "COVID_negative.png"
    },
    {
        "title": "SANCTIONS",
        "imagepos": "SANCTIONS_positive.png",
        "imageneg": "SANCTIONS_negative.png"
    },
    {
        "title": "DRONES",
        "imagepos": "DRONES_positive.png",
        "imageneg": "DRONES_negative.png"
    },
    {
        "title": "ROCKETS",
        "imagepos": "ROCKETS_positive.png",
        "imageneg": "ROCKETS_negative.png"
    },
    {
        "title": "BASES",
        "imagepos": "BASES_positive.png",
        "imageneg": "BASES_negative.png"
    },
    {
        "title": "MERCENARIES",
        "imagepos": "MERCENARIES_positive.png",
        "imageneg": "MERCENARIES_negative.png"
    }
];





module.exports = async function getTopics(req, res){

    

    // const document = await Narrative.find();

    // let tweets=[];

    //     const result= document[0].narratives;
    
    
    
    //     const final= result.map((f)=>{
            
    //             f.tweets.map((single)=>{
    //                 tweets.push(single);
                    
    
    //             })
            
    //     })

//     let tweets=[];
//     const raw=await topicmodel.find();
//         const data = raw[0].camps[0].topics;
    
    
    
//         data.map((d)=>{
//             // if(filter === "ALL"){
//             //     tweets.push(...d.tweets);
//             // }
           
//                 tweets= [...d.tweets];
            
//         })


// let ans=[]

//     tweets.map((single)=>{
//         if(single.attached_media && single.attached_media.attr_val.detected_faces.length >0){
//             single.attached_media.attr_val.detected_faces.map((single)=>{
//                 ans.push(single.attr_val);
//             })
//         }

//     })

//     return res.send({ans});




// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////

const { filter, narrativeFilter, flag, name, isCheckedImage, isCheckedVideo } = req.query;

let stance;

if(filter !== "Topic" && narrativeFilter == "Narrative"){
    stance= topicArray.filter((single)=>(single.title === filter))

}
else{

     stance= narrativeArray.filter((single)=>(single.title == narrativeFilter
     )
    )

}

console.log(stance);







// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////

  


    if(filter === "Topic"){
        filter === ""
    }
    if(narrativeFilter === "Narrative"){
        narrativeFilter === ""
    }

    let reply=0;
    let likes=0;
    let retweets=0;

try{

    let tweets= [];


    if(filter !== "Topic" && narrativeFilter == "Narrative"){
        const raw=await topicmodel.find();
        const data = raw[0].camps[0].topics;
    
    
    
        data.map((d)=>{
            // if(filter === "ALL"){
            //     tweets.push(...d.tweets);
            // }
            if(d.attr_val === filter){
                tweets= d.tweets;
            }
        })

    }
    else{
        const document = await Narrative.find();

        const result= document[0].narratives;
        let COUNT=0;
    
    
    
        const final= result.map((f)=>{
            if(f.title === narrativeFilter){
                f.tweets.map((single)=>{
                    tweets.push(single);
                    
    
                })
            }
        })

    }

   





// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////


    
    let nameTweetstopic=[];


    if(name !== "Faces"){

    tweets.map((single)=>{
        let isNameVisible=false;
        if(single.attached_media && single.attached_media.attr_val.detected_faces.length >0){
            single.attached_media.attr_val.detected_faces.map((single)=>{
                if (single.attr_val === name) {
                    isNameVisible = true;
                  }
            })
        }
        if(isNameVisible){
            nameTweetstopic.push(single);
          }

    })

    }

    else{
        nameTweetstopic=tweets;
    }

    tweets=nameTweetstopic;




// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////



let flagTweetstopic=[];


if(flag !== "flags"){

tweets.map((single)=>{
    let isNameVisible=false;
    if(single.attached_media && single.attached_media.attr_val.detected_flags.length >0){
        single.attached_media.attr_val.detected_flags.map((single)=>{
            if (single.attr_val === flag) {
                isNameVisible = true;
              }
        })
    }
    if(isNameVisible){
        flagTweetstopic.push(single);
      }

})

}

else{
    flagTweetstopic=tweets;
}

tweets=flagTweetstopic;






// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////// ////////////////////////////










let mediatopictweet = [];


if(isCheckedImage=="false" && isCheckedVideo=="false"){
    mediatopictweet=tweets;
    mediatopictweet.map((single)=>{
        reply+=single.reply_count;
        likes+=single.like_count;
        retweets+=single.retweet_count;
    })
}

else if (isCheckedVideo=="true" && isCheckedImage=="true"){
    tweets.map((single)=>{
        if (single.attached_media && single.attached_media.location){
            let ext = single.attached_media.location.split('.').pop().toLowerCase();
            if (ext === "mp4" || ext === "jpg" || ext === "png") {
                mediatopictweet.push(single);
                reply+=single.reply_count;
                likes+=single.like_count;
                retweets+=single.retweet_count;
              }
        }
    })
}

else if (isCheckedVideo=="true" && isCheckedImage=="false"){
    tweets.map((single)=>{
        if (single.attached_media && single.attached_media.location){
            let ext = single.attached_media.location.split('.').pop().toLowerCase();
            if (ext === "mp4") {
                mediatopictweet.push(single);
                reply+=single.reply_count;
                likes+=single.like_count;
                retweets+=single.retweet_count;
              }
        }
    })
}

else{
    tweets.map((single)=>{
        if (single.attached_media && single.attached_media.location){
            let ext = single.attached_media.location.split('.').pop().toLowerCase();
            if (ext === "jpg" || ext === "png") {
                mediatopictweet.push(single);
                reply+=single.reply_count;
                likes+=single.like_count;
                retweets+=single.retweet_count;
              }
        }
    })

}

tweets=mediatopictweet;




narrativetweets=[];

console.log("we are inside the topiconctrller")


    res.status(200).send({tweets, reply, likes, retweets, stance});
}
catch(err){
    res.status(500).send({ message: err.message });

}

}