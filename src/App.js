import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todo from './ToDo'
import Album from './Album'
import Recommended from './Recommended'

const App = () => {
    return (
        <div>
            <header className='title'>55期卒業制作</header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Todo} />
                    <Route exact path="/Recommended" component={Recommended} />
                    <Route exact path="/Album" component={Album} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
