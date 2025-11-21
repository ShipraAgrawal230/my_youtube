import { useSelector } from "react-redux"

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app?.isMenuOpen)

    if(!isMenuOpen) return null;
    return (
        isMenuOpen && <div className="p-5 shadow-lg w-48">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <h1 className="font-bold pt-5">You</h1>
            <ul>
                <li>History</li>
                <li>Playlists</li>
                <li>Your videos</li>
                <li>Your courses</li>
                <li>Watch Later</li>
                <li>Liked videos</li>
                <li>Downloads</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
                <li>Shopping</li>
                <li>Live</li>
                <li>Courses</li>
                <li>Sport</li>
                <li>News</li>
                <li>Podcasts</li>
                <li>Playables</li>
                <li>Fashion & beauty</li>
            </ul>
        </div>
    )
}
export default Sidebar