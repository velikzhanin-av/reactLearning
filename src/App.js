import logo from './logo.svg';
import './App.css';
import './components/Header/Header'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Footer from "./components/Footer/Footer";
import {addPosts, updateTextPosts} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profile={props.state.profile} addPosts={props.addPosts}
                                                 updateTextPosts={props.updateTextPosts}/>}/>
                        <Route path='/messages' element={<Messages messages={props.state.messages}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
