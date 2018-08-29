import React, { Component } from 'react'

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      itemsToDonate: '',
      house: '',
      postcode: '',
      referal: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleTextAreaChange(event) {
    this.setState({itemsToDonate: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();

    var test = await fetch('http://localhost:5000/donate/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name': this.state.name,
        'email': this.state.email,
        'phone': this.state.phone,
        'itemsToDonate': this.state.itemsToDonate,
        'house': this.state.house,
        'postcode': this.state.postcode,
        'referal': this.state.referal
      })
    })
    .then(function(response) {
      return response.json()
    }).then(function(body) {
      console.log(body);
    });


  };


  render(){
    return(
      <div>
        <form action="" className="donate-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Full name:
            <input value={this.state.name} onChange={this.handleChange} type="text" name="name" />
          </label>

          <label htmlFor="email">
            Email address:
            <input value={this.state.email} onChange={this.handleChange} type="text" name="email" />
          </label>

          <label htmlFor="phone">
            Phone number:
            <input value={this.state.phone} onChange={this.handleChange} type="text" name="phone" />
          </label>

          <label htmlFor="items">
            Items to donate:
            <textarea value={this.state.itemsToDonate} onChange={this.handleTextAreaChange} cols={40} rows={10} name="items" />

          </label>

          <label htmlFor="house">
            House/Flat:
            <input value={this.state.house} type="text" onChange={this.handleChange} name="house" />
          </label>

          <label htmlFor="postcode">
            Postcode:
            <input value={this.state.postcode} type="text" onChange={this.handleChange} name="postcode" />
          </label>

          <label htmlFor="referal">
            How did you hear about us?
            <input value={this.state.referal} type="text" onChange={this.handleChange} name="referal" />
          </label>

          <input type='submit' value='submit' />

        </form>
      </div>
    );
  }
}

export default DonateForm;
