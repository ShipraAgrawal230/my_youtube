export const BUTTON_LIST=[
    "All","Music","Mixes","T-Series","Arijit Singh","Soul Music","Telenovelas","Tamil Cinema",
    "Jukebox","Atif Aslam"
]

export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key="+process.env.REACT_APP_YOUTUBE_API_KEY

export const API_OPTIONS={
    headers:{
        "Content-Type":"application/json"
    }
}