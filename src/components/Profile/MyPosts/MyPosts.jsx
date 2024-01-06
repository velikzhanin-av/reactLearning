import Posts from "./Posts/Posts";
import styles from './MyPosts.module.css'
import React from "react";

const MyPosts = (props) => {
    let PostsTexts = props.myPosts.posts.map(text => {
        return <Posts text={text.text} likes={text.likes}/>
    })

    let postNewElement = React.createRef()
    let addPosts = () => {
        let text = postNewElement.current.value
        props.store.addPosts(text)
    }
    let updateTextPosts = () => {
        props.store.updateTextPosts(postNewElement.current.value)
    }


    return (
        <div className={styles.postsBlock}>
            <div>
                <textarea onChange={updateTextPosts} ref={postNewElement}/>
            </div>
            <div>
                <button onClick={addPosts}>Send</button>
                <div/>
                <div className={styles.posts}>
                    {PostsTexts}
                </div>
            </div>
        </div>
    )
}

export default MyPosts




