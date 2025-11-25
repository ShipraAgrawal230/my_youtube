import { commentsData } from "../utils/constant";
import CommentList from "./CommentList";



const CommentsContainer = () => {

    return (
        <div className="p-2 m-5">
            <h1 className="font-bold text-2xl">Comments:</h1>
            <CommentList comments={commentsData}/>
        </div>
    )
}
export default CommentsContainer