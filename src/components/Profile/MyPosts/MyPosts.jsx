import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Send</button>
            <Posts/>
            <Posts text='Всем привет!'/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
        </div>

    )
}

export default MyPosts