import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let profile = [
    {"text": "Hi. It is my first post", "likes": 12},
    {"text": "Hi all", "likes": 2},
    {"text": "I love javascript and react", "likes": 11}
]

let messages = {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App profile={profile} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
