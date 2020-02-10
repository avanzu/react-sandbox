import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Index from './containers/Index'
import About from './containers/About'

function App() {
    const items = [
        { path: '/', label: 'Home', exact: true },
        { path: '/about', label: 'About', exact: false},
    ]
    return (
        <Router>
            <div className="App">
                <NavBar brandName="fancy colors" items={items} />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
