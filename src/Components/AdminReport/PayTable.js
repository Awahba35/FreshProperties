import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class PayTable extends Component {
state = {
    payments:[]
}

//api call to get all payments data from database
componentDidMount(){
    axios.get('http://localhost:8080/getPaymentDue')
    .then(response =>{
        const PaymentArray = Response.data;
        this.setState({

            payments:PaymentArray
        });
    });

}
    render() {
         
return (
    <div>
<br/>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Tenant Name</th>
      <th scope="col">payment</th>
      <th scope="col">Date</th>
      <th scope="col">Rent Paid</th>
    </tr>
  </thead>
  <tbody>
      {this.state.payments.map((payment,index) =>
    <tr key ={index}>
      <th scope="row">1</th>
      <td>{payment.userId}</td>
      <td>{payment.paymentId}</td>
      <td>{payment.dueDate}</td>
      <td>{payment.rentPayment}</td>
    </tr>

      )}
  </tbody>
</table>
</div>
        );

    }

}

export default PayTable;