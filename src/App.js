import React from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Todo from './ToDo'
import Album from './Album'
import Recommended from './Recommended'
import Room from './pages/Room'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import firebase from './config/firebase'
import './App.css'
import { AuthProvider } from './AuthService';

const App = () => {
    return (
        <div>
            <header className='header'>55期卒業制作</header>
            <BrowserRouter>
                    <div className="transition">
                        <Link to={`/Todo`}>TODOリスト</Link>
                        <Link to={`/room`}>room</Link>
                        <Link to={`/profile`}>profile</Link>
                        <Link to={`/Recommended`}>おすすめ機能</Link>
                        <Link to={`/Album`}>卒業アルバム</Link>
                        <Link to={`/Login`} onClick={() => firebase.default.auth().signOut().then(() => {console.log('ログアウト')})}>Logout</Link>
                    </div>
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" component={SignUp} />
                        <Route exact path="/Todo" component={Todo} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Room" component={Room} />
                        <Route exact path="/Profile" component={Profile} />
                        <Route exact path="/Recommended" component={Recommended} />
                        <Route exact path="/Album" component={Album} />
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
            <footer className='footer'><small>2021.6.6 卒業</small></footer>
        </div>
    )
}

export default App
