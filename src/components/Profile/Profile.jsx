import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <img src='https://35photo.pro/photos_main/642/3212849.jpg'/>
            <div>
                Main content
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile