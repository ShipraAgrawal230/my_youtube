import Comment from "./Comment"

const CommentList = ({ comments }) => {
    return (
        comments.map((comment, index) => 
        <div key={index}>
            <Comment data={comment} />
            {comment.replies && 
            <div className="pl-5 ml-5 border-l-2 border-black-300">
                <CommentList comments={comment.replies}/>
            </div>}
        </div>)
    )
}
export default CommentList