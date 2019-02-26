import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../store/actions/contact.actions';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = async (e) => {
    e.preventDefault();

    // Get the current state values (which are equal to input values everytime)
    const { name, email, phone } = this.state;
    
    // Check for input errors, return if has any
    if(this.hasErrors(name, email, phone)) return;

    // Create a new contact object to add
    const newContact = {
      name,
      email,
      phone
    };

    // Add contact to store
    this.props.addContact(newContact);

    // Clear this component state (input fields)
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // Redirect to home
    this.props.history.push('/');
  };

   // Method to check for input errors
   hasErrors(name, email, phone) {
    if(name.trim() === '') {
        this.setState({errors: { name : 'Name is required' }});
        return true;
    }
    if(email.trim() === '') {
        this.setState({errors: { email : 'Email is required' }});
        return true;
    }
    if(phone.trim() === '') {
        this.setState({errors: { phone : 'Phone is required' }});
        return true;
    }
    return false;
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-outline-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default connect(null, { addContact })(AddContact);
