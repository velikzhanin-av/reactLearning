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

const MessagesText = (props) => {
    return (
        <div>
            {props.text}
        </div>
    )
}

const Messages = (props) => {
    let users = [
        "Viola",
        "Max",
        "Voznikas",
        "Sergey",
        "Mitrofanov",
        "Mama",
    ]

    let messages = [
        "Hi",
        "How are you?",
        "Hi",
        "How are you?",
        "Hi",
        "How are you?",
    ]

    let i = 0
    let MessagesItems = users.map((item) => {
        i++
        return <MessagesItem name={item} id={i}/>
    })

    let MessagesTexts = messages.map((message) => {
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