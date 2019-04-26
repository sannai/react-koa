import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Message from './pages/Message'
import '../src/style/rest.css'
function App() {
    return (
        <div className='App'>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/message' component={Message} />
        </div>
    )
}

export default App
