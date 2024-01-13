import styles from './Messages.module.css'
import {NavLink} from "react-router-dom";
import MessagesItem from "./MessagesItem/MessagesItem";
import MessagesText from "./MessagesText/MessagesText";


const Messages = (props) => {


    let MessagesItems = props.messages.users.map((item) => {
        return <MessagesItem name={item.user} id={item.id}/>
    })

    let MessagesTexts = props.messages.messagesText.map((message) => {
        return <MessagesText text={message.text} id={message.id}/>
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