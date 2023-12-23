import styles from './Messages.module.css'
import {NavLink} from "react-router-dom";


const MessagesItem = (props) => {
    let url = `/messages/${props.id}`
    return (
        <div>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    )
}


const Messages = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.chatsName}>
                <MessagesItem name="Viola" id="1"/>
                <MessagesItem name="Max" id="2"/>
                <MessagesItem name="Voznikas" id="3"/>
                <MessagesItem name="Sergey" id="4"/>
                <MessagesItem name="Mitrofanov" id="5"/>
                <MessagesItem name="Mama" id="6"/>
            </div>
            <div className={styles.chatsText}>
                <div>
                    Hi
                </div>
                <div>
                    Hi
                </div>
                <div>
                    Hi
                </div>
                <div>
                    Hi
                </div>
                <div>
                    Hi
                </div>
                <div>
                    Hi
                </div>
            </div>
        </div>

    )
}

export default Messages