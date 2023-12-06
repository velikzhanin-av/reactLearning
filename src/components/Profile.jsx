import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.content}>
            Main content
            <div className="posts">
                <div className={styles.item}>
                    post1
                </div>
                <div className={styles.item}>
                    post2
                </div>
                <div className={styles.item}>
                    post3
                </div>
                <div className={styles.item}>
                    post4
                </div>
            </div>
        </div>
    )
}

export default Profile