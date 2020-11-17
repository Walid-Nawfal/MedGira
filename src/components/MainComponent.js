import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import Footer from './FooterComponent';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={Home}></Route>
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
