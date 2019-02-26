import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../store/actions/contact.actions';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card border-primary mb-3">
        <h4 className="card-header pb-3 pt-3"> {name}{' '}
          <i
            onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }} />

          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)} />

          <Link to={`contact/edit/${id}`}>
            <i
              className="fa fa-edit text-warning"
              style={{cursor: 'pointer', float: 'right', marginRight: '1rem'}} />
          </Link>

        </h4>
        {showContactInfo ? (
          <div className="card-body">
            <h5 className="card-title pb-2 pt-2">Email: {email}</h5>
            <p className="card-text lead pb-2 pt-2">Phone: {phone}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(null, { deleteContact })(Contact);
