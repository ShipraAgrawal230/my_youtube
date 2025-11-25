const Comment = ({ data }) => {
    const { name, text, replies } = data
    return (
        <div className="flex bg-gray-100 shadow-sm p-2 rounded-l-lg my-2">
            <img alt="user" className="h-12 w-12" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Comment