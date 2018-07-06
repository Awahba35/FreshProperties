import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

class MaintRequest extends Component {
state = {
  generalMaitenance:'',
  MaitenanceMessage:''
}

maintenanceSubmissionHandler = (event) => {
  const maintEmail = {
    generalMaitenance: this.state.generalMaitenance,
    MaitenanceMessage: this.state.MaitenanceMessage,
  }
  axios.post('http://localhost:8080/maint',maintEmail);
  event.preventDefault();//hides the querry string from being displayed on the browser
}

maitenanceChangeHandler = (event) => {
  //dynamically getting the name and value as well
  const name = event.target.name;
  const value = event.target.value;

  this.setState({ [name]: value });
}

  render() {
    return (
<form onSubmit={this.maintenanceSubmissionHandler}>
      <div className="container">
      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select onChange={this.maitenanceChangeHandler} value={this.state.generalMaitenance} name="generalMaitenance"class="custom-select" id="inputGroupSelect01">
    <option value>Choose...</option>
    <option value="1">General Maitenance</option>
    <option value="2">Electrical</option>
    <option value="3">HVAC</option>
    <option value="4">Plumbing</option>
  </select>
</div>
<br/>
<br/>
<p>* Please describe the request </p>
<br/>
<textarea onChange={this.maitenanceChangeHandler} value={this.state.MaitenanceMessage} name="MaitenanceMessage" rows="4" cols="50">
</textarea>
<br/>
<br/>
<button type="button" class="btn btn-success">Submit</button>
<br/>
     </div>
     </form>
    );
  }
}

export default MaintRequest;
