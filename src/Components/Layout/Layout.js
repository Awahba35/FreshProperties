import React, { Component } from 'react';
import Header from '../Header/Header';
import SignUp from '../Sign-up/SignUp';
import {Route,Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import PayRent from '../PayRent/PayRent';
import MaintRequest from '../MaintRequest/MaintRequest';
import PayTable from '../AdminReport/PayTable';
class Layout extends Component {
    state = {
        user: null,
    }
    //Change variable name from event to isValidUser
    signInSubmissionHandler = (user) => {
        this.setState(
            {
                user: user
            }
        );
 
    }
    render() {
        let routes = (
            <React.Fragment>
                <Route exact path="/home" component={Home} />
                <Route exact path="/sign-Up" component={SignUp} />
                <Route exact path="/" component={Home} />
                

            </React.Fragment>
        );
        if(this.state.user){
             routes = (
                <React.Fragment>
                    <Route exact path="/pay-rent" component={PayRent} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Maint-Request" component={MaintRequest} />
                    <Route exact path="/PayTable" component={PayTable} />
                    <Route exact path="/" component={Home} />
                    
                </React.Fragment> 
            );
        }
        return (
            <div>
                <React.Fragment>

                    <Header isUserLoggedIn={this.state.user} submitHandler={this.signInSubmissionHandler} />

                {routes}

                </React.Fragment>
            </div>
        )
    }
}

export default Layout;