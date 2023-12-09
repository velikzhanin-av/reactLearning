import styles from "./Posts.module.css";

const Posts = (props) => {
    return (
        <div className="posts">
            <div className={styles.item}>
                <img src='https://www.interfax.ru/ftproot/textphotos/2022/03/05/700vv.jpg'/>
                {props.text}
            </div>
        </div>
    )
}

export default Posts