import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice"
import { generateRandomnName, generateRandomnStrings } from "../utils/helper"

const LiveChat = () => {
    const dispatch = useDispatch()
    const chatMessage = useSelector((store) => store.chat?.messages)
    const [liveMessage, setLiveMessage] = useState("")

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomnName(),
                text: generateRandomnStrings(50)
            }))
        }, 2000)

        return () => clearInterval(timer)
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addMessages({
            name:"Shipra Ag.",
            text:liveMessage
        }))
        setLiveMessage("")
    }
    return (
        <>
            <div className="ml-4 p-2 border border-black w-full h-[600] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                <div>
                    {
                        chatMessage.map((chat, index) =>
                            <ChatMessage name={chat.name} message={chat.text} key={index} />)
                    }
                </div>
            </div>
            <form className="w-full p-2 m-2 border border-black" onSubmit={(e) => { handleSubmit(e) }}>
                <input type="text" placeholder="Enter Message" className="w-125 p-2 border border-gray-300"
                    value={liveMessage} onChange={(e) => { setLiveMessage(e.target.value) }} />
                <button className="p-2 mx-4 bg-green-200 rounded-sm">Submit</button>
            </form>
        </>
    )
}
export default LiveChat