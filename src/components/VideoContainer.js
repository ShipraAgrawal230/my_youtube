import { useEffect } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constant"

const VideoContainer = () => {
    async function getVideos() {
        console.log(YOUTUBE_VIDEOS_API)
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const json=await data.json()
        console.log("json@@",json)
    }
    useEffect(() => {
        getVideos()
    }, [])
    return (
        <div>video container</div>
    )
}
export default VideoContainer