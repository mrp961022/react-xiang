import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import App from './view/App'
import Location from './view/Location'
import './assets/css/style.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App}></Route>
            <Route path="/location" component={Location}></Route>
        </Router>
    </Provider>,
    document.querySelector("#root")
 )
