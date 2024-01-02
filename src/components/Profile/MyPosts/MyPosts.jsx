import Posts from "./Posts/Posts";
import styles from './MyPosts.module.css'

const MyPosts = () => {

    let texts = [
        {"text": "Hi", "likes": 12},
        {"text":"Hi all", "likes": 2},
        {"text":"Yo", "likes": 11}
    ]

    let PostsTexts = texts.map(text => {
        return <Posts text={text.text}/>
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




