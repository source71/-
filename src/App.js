import React from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Todo from './ToDo'
import Album from './Album'
import Recommended from './Recommended'
import Room from './pages/Room'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css'
import firebase from './config/firebase'

const App = () => {
    return (
        <div>
            <header className='header'>55期卒業制作</header>
            <BrowserRouter>
            <button className='logout' onClick={() => firebase.default.auth().signOut()}>Logout</button>
                <div className="transition">
                    <Link to={`/Todo`}>TODOリスト</Link>
                    <Link to={`/room`}>room</Link>
                    <Link to={`/profile`}>profile</Link>
                    <Link to={`/Recommended`}>おすすめ機能</Link>
                    <Link to={`/Album`}>卒業アルバム</Link>
                </div>
                <Switch>
                    <Route exact path="/" component={SignUp} />
                    <Route exact path="/Todo" component={Todo} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Room" component={Room} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/Recommended" component={Recommended} />
                    <Route exact path="/Album" component={Album} />
                </Switch>
            </BrowserRouter>
            <footer className='footer'><small>2021.6.6 卒業</small></footer>
        </div>
    )
}

export default App
