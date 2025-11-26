const ChatMessage = ({name,message}) => {
    return (
        <div className="flex items-center shadow-sm p-2">
            <img src="https://yt4.ggpht.com/ytc/AIdro_kT0IqtOmXpdtFie8P0x98qrJz9kcldmCupNPOvWp9a2UN8863NdoSc1f-MBxFQkj9lBQ=s32-c-k-c0x00ffffff-no-rj" alt="user"/>
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    )
}
export default ChatMessage