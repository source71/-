import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Room from './Room'
import { AuthProvider } from '../AuthService'
import LoggedInRoute from '../LoggedInRoute'
import Login from './Login'
import Profile from './Profile'
import Signup from './SignUp'
import './main.css'

const App = () => {
    return (
        <div>
            <header className='header'>５５期卒業サイト</header>
            <AuthProvider>
                <Router>
                    <Switch>
                        <LoggedInRoute exact path='/' component={Room} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/profile' component={Profile} />
                    </Switch>
                </Router>
            </AuthProvider>
            <footer className='footer'><small>2021.6.6 卒業</small></footer>
        </div>
    )
}

export default App