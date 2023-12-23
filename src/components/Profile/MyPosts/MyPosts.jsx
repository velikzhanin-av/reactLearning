import Posts from "./Posts/Posts";
import styles from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Send</button>
            <Posts text='Всем привет!'/>
            <Posts text='Всем привет!'/>
            <Posts text='Всем привет!'/>
            <Posts text='Всем привет!'/>
        </div>

    )
}

export default MyPosts