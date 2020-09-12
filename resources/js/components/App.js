import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Footer from './layout/Footer';
import Header from './layout/Header';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

class App extends Component {
    state = {
        PUBLIC_URL: "/delwar/laravel_react/myTask/",
    }

    render() {
        return (
            <div>
                <Router>
                    <Header></Header>
                    <div>
                        {/* <nav>
                            <ul>
                                <li>
                                    <Link to={`${this.state.PUBLIC_URL}`}>Home</Link>
                                </li>
                                <li>
                                    <Link to={`${this.state.PUBLIC_URL}about`}>About</Link>
                                </li>
                                <li>
                                    <Link to={`${this.state.PUBLIC_URL}users`}>Users</Link>
                                </li>
                            </ul>
                        </nav> */}

                        <Switch>
                            <Route path={`${this.state.PUBLIC_URL}about`}>
                                <About />
                            </Route>
                            <Route path={`${this.state.PUBLIC_URL}contact`}>
                                <Contact />
                            </Route>
                            <Route path={`${this.state.PUBLIC_URL}`}>
                                <Home />
                            </Route>
                        </Switch>

                        <Container>
                            <Footer />
                        </Container>

                    </div>

                </Router>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
} 