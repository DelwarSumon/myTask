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
import ProjectList from './pages/projects/ProjectList';
import ProjectCreate from './pages/projects/ProjectCreate';
import { PUBLIC_URL } from '../constants';

class App extends Component {
    
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <div>
                        
                        <Container className="p-4">
                            <Switch>
                                <Route path={`${PUBLIC_URL}about`}>
                                    <About />
                                </Route>
                                <Route path={`${PUBLIC_URL}contact`}>
                                    <Contact />
                                </Route>
                                <Route path={`${PUBLIC_URL}projects/create`} >
                                    <ProjectCreate />
                                </Route>
                                <Route path={`${PUBLIC_URL}projects`}>
                                    <ProjectList />
                                </Route>
                                <Route path={`${PUBLIC_URL}`}>
                                    <Home />
                                </Route>
                            </Switch>

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