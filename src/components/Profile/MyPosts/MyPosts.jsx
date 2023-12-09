import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Send</button>
            <Posts/>
            <Posts text='Пиздец блядь!'/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
        </div>

    )
}

export default MyPosts