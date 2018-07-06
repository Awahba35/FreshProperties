import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Header extends Component {

    state = {
        email: '',
        password: '',
        loginError: false,
        user:[]
    }
    signInSubmissionHandler = (event) => {
        // logic for api call to check if user is valid or not
        const logIn = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:8080/login',logIn)
        //Asynchronous call
        .then(response => {
        this.props.submitHandler(response.data);   
        }
    );
        event.preventDefault();//hides the querry string from being displayed on the browser
        

    }

    signInChangeHandler = (event) => {
        //dynamically getting the name and value as well
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }
    render() {
        let errorMessage = '';
        if(this.state.loginError){
            errorMessage = "Username or Password is invalid";
        }
        let links = (
            <React.Fragment>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">Sign-Up</Link>
                </li>
              
            </React.Fragment>
        );
        if (this.props.isUserLoggedIn) {

            links = (
                <React.Fragment>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pay-rent">PayRent</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Maint-Request">Maitenance Request</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/PayTable">PayTable</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Sign-Out</Link>
                    </li>
                </React.Fragment>
            );
        }
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <Link className="navbar-brand" to="#">Fresh Properties Portal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                             {links}
                        </ul>
                        {/*add input fields for the user to sign in*/}
                        <form onSubmit={this.signInSubmissionHandler} className="form-inline mt-2 mt-md-0">
                            <div className="form-group">
                                <input onChange={this.signInChangeHandler} value={this.state.email} name="email" type="text" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.signInChangeHandler} value={this.state.password} name="password" type="password" placeholder="Password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-success">Sign in</button>
                        </form>
                        {/* <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;