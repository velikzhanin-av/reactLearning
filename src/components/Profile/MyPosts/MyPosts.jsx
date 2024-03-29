import Posts from "./Posts/Posts";
import styles from './MyPosts.module.css'
import React from "react";
import {addPostsActionCreator, updateTextPostsActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let PostsTexts = props.myPosts.posts.map(text => {
        return <Posts text={text.text} likes={text.likes}/>
    })

    let postNewElement = React.createRef()
    let addPosts = () => {
        let text = postNewElement.current.value
        let action = addPostsActionCreator(text)
        props.store.dispatch(action)
        postNewElement.current.value = props.store._state.profile.textarea
    }

    let updateTextPosts = () => {
        let action = updateTextPostsActionCreator(postNewElement.current.value)
        props.store.dispatch(action)
    }

    return (
        <div className={styles.postsBlock}>
            <div>
                <textarea onChange={updateTextPosts} ref={postNewElement}></textarea>
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




