import styles from "./Posts.module.css";

const Posts = (props) => {
    return (
        <div className={styles.posts}>
            <div className={styles.item}>
                <img
                    src='https://w7.pngwing.com/pngs/193/417/png-transparent-computer-software-software-developer-programmer-chief-executive-project-business-face-hand-people.png'/>
                <span>
                    {props.text}
                <br/>
                Likes {props.likes}
                </span>
            </div>
        </div>
    )
}

export default Posts