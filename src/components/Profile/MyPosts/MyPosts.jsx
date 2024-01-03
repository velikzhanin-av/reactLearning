import Posts from "./Posts/Posts";
import styles from './MyPosts.module.css'

const MyPosts = (props) => {
    let PostsTexts = props.texts.map(text => {
        return <Posts text={text.text} likes={text.likes}/>
    })

    return (
        <div className={styles.postsBlock}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
                <div/>
                <div className={styles.posts}>
                    {PostsTexts}
                </div>
            </div>
        </div>
    )
}

export default MyPosts




