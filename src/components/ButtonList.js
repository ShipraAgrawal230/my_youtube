import { BUTTON_LIST } from "../utils/constant"
import Buttons from "./Buttons"

const ButtonsList = () => {
    return (
        <div className="flex">
            {
                BUTTON_LIST.map((btnName,index)=><Buttons name={btnName} key={index}/>)
            }
        </div>
    )
}
export default ButtonsList