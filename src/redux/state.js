const ADD_POSTS = "ADD_POSTS"
const UPDATE_TEXT_POSTS = "UPDATE_TEXT_POSTS"

export const addPostsActionCreator = (text) => ({type: ADD_POSTS, text: text})
export const updateTextPostsActionCreator = (text) => ({type: UPDATE_TEXT_POSTS, text: text})

export let store = {
    _state: {
        profile: {
            posts: [
                {text: "Hi. It is my first post", "likes": 12},
                {text: "Hi all", "likes": 2},
                {text: "I love javascript and react", "likes": 11}
            ],
            textarea: "",
        },
        messages: {
            users: [
                "Viola",
                "Max",
                "Voznikas",
                "Sergey",
                "Mitrofanov",
                "Mama",
            ],
            messagesText: [
                "Hi",
                "How are you?",
                "Hi",
                "How are you?",
                "Hi",
                "How are you?",
            ]
        }
    },
    getState() {
        return this._state
    },
    rerender() {
        console.log("State changed")
    },
    subscribe(observer) {
        this.rerender = observer
    },
    dispatch(action) {
        if (action.type === ADD_POSTS) {
            let newPost = {text: action.text, likes: 0}
            this._state.profile.posts.push(newPost)
            this._state.profile.textarea = ""
            this.rerender(this._state)
        } else if (action.type === UPDATE_TEXT_POSTS) {
            this._state.profile.textarea = action.text
            this.rerender(this._state)
        }
    },
}
