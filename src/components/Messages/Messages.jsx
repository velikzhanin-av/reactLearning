import styles from './Messages.module.css'
import {NavLink} from "react-router-dom";
import MessagesItem from "./MessagesItem/MessagesItem";
import MessagesText from "./MessagesText/MessagesText";


const Messages = (props) => {


    let i = 0
    let MessagesItems = props.messages.users.map((item) => {
        i++
        return <MessagesItem name={item} id={i}/>
    })

    let MessagesTexts = props.messages.messagesText.map((message) => {
        return <MessagesText text={message}/>
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.chatsName}>
                {MessagesItems}
            </div>
            <div className={styles.chatsText}>
                {MessagesTexts}
            </div>
        </div>

    )
}

export default Messages