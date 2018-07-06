import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import ThankYou from "../ThankYou/ThankYou";

class SignUp extends Component {

    state = {
        firstName:'',
        lastName:'',
        age:'',
        cell:'',
        email:'',
        password:''
    }
    SignUpChangeHandler = (event) => {
        //Will give you the data the user enters
        const value = event.target.value;
        //Will give us the name of that html input field eg 'email'
        const name = event.target.name;

        this.setState({
            //this will give us email:example@email.com in our state
            [name]:value
        })
    }
    SignUpSubmitHandler = (event) => {

        event.preventDefault();//Hides the query string from being displayed on the browser
        const user ={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        age:this.state.age,
        cell:this.state.cell,
        email:this.state.email,
        password:this.state.password
        }
        axios.post('http://localhost:8080/register',user)
        .then(function (response){
            
        })
    }
    render() {
        let redirect = null;
        if (this.props.isLoggedInUser) {
            redirect = (<Redirect to="/home" />);
        }
        return (

            <React.Fragment>
                {redirect}
                <form onSubmit={this.SignUpSubmitHandler}className="container">
                    <div className="form-row">
                    <div className="form-group col-md-6">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" onChange={this.SignUpChangeHandler} value={this.state.firstName} name="firstName" className="form-control" id="firstName" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" onChange={this.SignUpChangeHandler} value={this.state.lastName} name="lastName" className="form-control" id="lastName" placeholder="Last Name" />
                        </div>
                    
                        <div className="form-group col-md-6">
                            <label htmlFor="age">age</label>
                            <input type="text" onChange={this.SignUpChangeHandler} value={this.state.age} name="age" className="form-control" id="age" placeholder="age" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cell">cell</label>
                            <input type="text" onChange={this.SignUpChangeHandler} value={this.state.cell} name="cell" className="form-control" id="cell" placeholder="cell" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={this.SignUpChangeHandler} value={this.state.email} name="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" onChange={this.SignUpChangeHandler} value={this.state.password} name="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                   </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text"  className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option >Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                    </div>
                    <a type ="button" href="../ThankYou/ThankYou"> SignUp</a>
                </form> 
                </React.Fragment>
        );

    }

}

export default SignUp;