import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    async function getVideos() {
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const json = await data.json()
        setVideos(json.items)
    }
    useEffect(() => {
        getVideos()
    }, [])
    return (
        <div className="flex flex-wrap">{
            videos.map((video, index) => <Link to={"/watch?v=" + video.id} key={index}><VideoCard video={video} /></Link>)
        }</div>
    )
}
export default VideoContainer