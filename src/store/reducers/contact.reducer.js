// Importing constant action type names
import { GET_CONTACTS, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, ADD_CONTACT } from '../actions/_types.actions';

const initialState = {
    contacts: [
        // {
        //   id: 1,
        //   name: 'John Doe',
        //   email: 'john@gmail.com',
        //   phone: '555-555-5555'
        // },
        // {
        //   id: 2,
        //   name: 'Karen Williams',
        //   email: 'karen@gmail.com',
        //   phone: '444-444-4444'
        // },
        // {
        //   id: 3,
        //   name: 'Henry Johnson',
        //   email: 'henry@gmail.com',
        //   phone: '333-333-333'
        // }
    ],
    contact: {}
};

/**
 * This method dictates what to do for each type of request
 * @param {*} state   -> Current state
 * @param {*} action  -> Request information. Will have payload property if action mutates state
 */
export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        // Replace current state with new state (from api)
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload
            };
        // Return the given contact in our state contact object which serves as the 'current contact'
        case GET_CONTACT:
            return {
                ...state,
                contact: payload
            };
        // Return a new array of contacts with the updated contact (by checking the payload id with each contact id in contacts)
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => payload.id === contact.id ? contact = payload : contact)
            };
        // Replace current state with same state + newly added contact
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [payload, ...state.contacts]
            };
        // Replace current state with new state leaving out the deleted contact id
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== payload)
            };
        default:
            return state;
    }
}