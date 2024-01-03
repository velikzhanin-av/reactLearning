import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <img src='https://35photo.pro/photos_main/642/3212849.jpg'/>
            <div>
                <h3>My posts</h3>
            </div>
            <MyPosts texts={props.profile}/>
        </div>
    )
}

export default Profile