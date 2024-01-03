import {NavLink} from "react-router-dom";
import Messages from "../Messages";

const MessagesItem = (props) => {
    let url = `/messages/${props.id}`
    return (
        <div>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    )
}

export default MessagesItem