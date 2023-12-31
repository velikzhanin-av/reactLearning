import Posts from "./Posts/Posts";
import styles from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
                <div/>
                <div className={styles.posts}>
                    <Posts text='Всем привет!'/>
                    <Posts text='Всем привет!'/>
                    <Posts text='Всем привет!'/>
                    <Posts text='Всем привет!'/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts