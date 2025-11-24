import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_API } from "../utils/constant"
import { cacheResults } from "../utils/searchSlice"

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggetions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const dispatch = useDispatch()
    const searchCache=useSelector((store)=>store.search)

    function handleClick() {
        dispatch(toggleMenu())
    }

    async function getSearchSuggestion() {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggetions(json[1])
        dispatch(cacheResults({[searchQuery]:json[1]}))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggetions(searchCache[searchQuery])
            }
            else {
                getSearchSuggestion()
            }
        }, 200)

        return () => { clearTimeout(timer) }
    }, [searchQuery])

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-8 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="menu" onClick={handleClick} />
                <img className="h-8 w-30" src="https://as2.ftcdn.net/jpg/07/37/98/99/1000_F_737989984_yqhTN9GhvLeuUiLjUp9MSe1IacGNXlsl.jpg" alt="logo" />
            </div>
            <div className="col-span-10 px-10">
                <div>
                    <input type="text" className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full relative -top-1"
                        placeholder="Search" onChange={(e) => { setSearchQuery(e.target.value) }}
                        onFocus={() => { setShowSuggestions(true) }} onBlur={() => { setShowSuggestions(false) }} />
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                        <img className="h-6" src="https://www.shareicon.net/data/128x128/2015/09/01/94156_search_512x512.png" alt="search" />
                    </button>
                </div>
                {showSuggestions &&
                    suggestions.length > 0 &&
                    <div className="absolute bg-white py-2 px-2 shadow-lg rounded-lg w-[37rem] border border-gray-100">
                        <ul>
                            {
                                suggestions.map((suggestion, index) => <li className="py-2 px-5 flex hover:bg-gray-100" key={index}> <img className="h-6 px-2" src="https://www.shareicon.net/data/128x128/2015/09/01/94156_search_512x512.png" alt="search" />{suggestion}</li>)
                            }
                        </ul>
                    </div>}
            </div>
            <div className="ml-auto col-span-1">
                <img className="h-8 w-10" src="https://yt3.ggpht.com/ytc/AIdro_neAWLH7sZOed0nxggmhltv1elkeHlOQumeJrdVd-uJprIR_0tQYDxrh34wywukW1kbeQ=s88-c-k-c0x00ffffff-no-rj" alt="user" />
            </div>
        </div>
    )
}
export default Head