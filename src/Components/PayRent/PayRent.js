import React, { Component } from 'react';
class PayRent extends Component {
    state = {
        nameOnCard: '',
        cardNumber: '',
        csv: '',
        expiration: ''

    }
    SignUpChangeHandler = (event) => {
        const value = event.target.value;

        const name = event.target.name; 

        this.setState({
            [name]:value
        })
    }
    render() {

        return (
            <form onSubmit={this.SignUpSubmitHandler} className="container">
                <div className="">
                    <div class="col-md-12"><h4 class="modal-title my-modal-label">Please enter your payment information below</h4></div>
                    <br />
                    <br />
                    <div className="form-group col-md-6">
                        <label htmlFor="nameOnCard">Name on card</label>
                        <input type="text" onChange={this.SignUpChangeHandler} value={this.state.nameOnCard} name="nameOnCard" className="form-control" id="nameOnCard" placeholder="Name On Card" />
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" onChange={this.SignUpChangeHandler} value={this.state.cardNumber} name="cardNumber" className="form-control" id="cardNumber" placeholder="Card Number" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="expiration">Expiration</label>
                    <input type="date" onChange={this.SignUpChangeHandler} value={this.state.expitration} name="expiration" className="form-control" id="expiration" />
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="csv">CSV</label>
                    <input type="text" onChange={this.SignUpChangeHandler} value={this.state.CSV} name="csv" className="form-control" id="csv" placeholder="CSV" />
                </div>
                <div class='form-row'>
                    <div class='col-md-12'>
                        <div class='form-control total btn btn-info standard-button'>
                            Total:
                            <span class='amount'>$700</span>
                        </div>
                    </div>
                </div>
                <div class='form-row'>
                    <div class='col-md-12 form-group'>
                        <button class='form-control btn btn-primary submit-button standard-button' type='submit' id="pay">Pay »</button>
                    </div>
                </div>
            </form>

        );
    }
}

export default PayRent;
