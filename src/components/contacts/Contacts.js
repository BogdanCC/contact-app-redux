import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getContacts } from '../../store/actions/contact.actions';

class Contacts extends Component {

  // Getting store data in this lifecycle method
  componentDidMount() {
    this.props.getContacts(); // This will put our store state in props
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-5 mt-5">
          <span className="text-primary">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

// Type checking props
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// Accessing the state, contact -> reducer, contacts -> our contacts array
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

// Connects store state to this component
export default connect(mapStateToProps, {getContacts})(Contacts);
