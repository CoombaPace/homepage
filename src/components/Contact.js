import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  state = {
    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  };
  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    const { name, email, subject, message } = this.state.form;

    const isInvalidForm = name === '' || email === '' || message === '';

    if (isInvalidForm) {
      alert('hey your form is incomplete, please answer all boxes');
      return;
    } // if no @ sign on email
    //message max 200 char
    //optional subject
    //(required) in box

    const url = 'https://telegram-message-bot.herokuapp.com/';
    // const url = 'http://localhost:3000';
    console.log(this.state);
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ ...this.state.form }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(response => console.log(response));
    //.then(add reset recatpcta )
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-heading">
          <p>Ask a question or say hello!</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>name:</label>
            <input
              placeholder="(Required)"
              type="text"
              name="name"
              value={this.state.form.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>email:</label>
            <input
              placeholder="(Required)"
              type="text"
              name="email"
              value={this.state.form.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>subject:</label>
            <input
              placeholder="(Optional)"
              type="text"
              name="subject"
              value={this.state.form.subject}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              placeholder="(Required)"
              type="text"
              name="message"
              value={this.state.form.message}
              onChange={this.handleChange}
            />
          </div>

          <div className="submitArea">
            
            <button className='subBtn' type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
console.log('');

export default Contact;
