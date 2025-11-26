import { useEffect } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice"
import { generateRandomnName, generateRandomnStrings } from "../utils/helper"

const LiveChat = () => {
    const dispatch = useDispatch()
    const chatMessage = useSelector((store) => store.chat?.messages)

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomnName(),
                text: generateRandomnStrings(50)
            }))
        }, 500)

        return () => clearInterval(timer)
    }, [])
    return (
        <div className="ml-4 p-2 border border-black w-full h-[600] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {
                chatMessage.map((chat,index) =>
                    <ChatMessage name={chat.name} message={chat.text} key={index}/>)
            }
        </div>
    )
}
export default LiveChat