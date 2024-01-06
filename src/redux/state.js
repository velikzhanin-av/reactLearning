let state = {
    profile: {
        posts: [
            {"text": "Hi. It is my first post", "likes": 12},
            {"text": "Hi all", "likes": 2},
            {"text": "I love javascript and react", "likes": 11}
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
}

let rerender = () => {
    console.log("State changed")
}

export const subscribe = (observer) => {
    rerender = observer
}

export const addPosts = (text) => {
    let newPost = {"text": text, "likes": 0}
    state.profile.posts.push(newPost)
    state.profile.textarea = ""
    rerender(state)

}

export const updateTextPosts = (text) => {
    let newText = text
    state.profile.textarea = newText
    rerender(state)
}


export default state