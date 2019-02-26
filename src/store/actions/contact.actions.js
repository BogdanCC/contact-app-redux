import { GET_CONTACTS, GET_CONTACT, UPDATE_CONTACT, ADD_CONTACT, DELETE_CONTACT } from './_types.actions';
import axios from 'axios';

/**
 * These methods only return an object with the action information (type, payload)
 * The action 'type' property specified the type of request (e.g add, delete, get, update)
 * The action 'payload' property specifies information to mutate (e.g what to delete, what to add) 
 * */

/**
 * Return a 'GET_CONTACTS' type which triggers the 'GET_CONTACTS' case in contact.reducer
 * @returns {Object} -> 'Action' object with the action type and payload (json response data)
 */
export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
}

/**
 * Return a 'GET_CONTACT' type which triggers the 'GET_CONTACT' case in contact.reducer
 * @returns {Object} -> 'Action' object with the action type and payload (json response data)
 */
export const getContact = id => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    });
}

/**
 * Return an 'ADD_CONTACT' type which triggers the 'ADD_CONTACT' case in contact.reducer
 * @param {*} contact -> Contact object to add to contacts array in state
 * @returns {Object}  -> 'Action' object with action type and payload data
 */
export const addContact = contact => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
}

/**
 * Return an 'UPDATE_CONTACT' type which triggers the 'UPDATE_CONTACT' case in contact.reducer
 * @param {*} contact ->  Updated Contact object
 * @returns {Object}  -> 'Action' object with action type and payload data
 */
export const updateContact = (contact, id) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, contact);
    console.log(res.data)
    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    });
}

/**
 * Return a 'DELETE_CONTACT' type which triggers the 'DELETE_CONTACT' case in contact.reducer
 * @param {*} id      -> The id property of the contact object to delete from contacts array in state
 * @returns {Object}  -> 'Action' object with the action type and payload (the id of the deleted user)
 */
export const deleteContact = id => async dispatch => {
    // Since jsonplaceholder doesn't actually mutate its data when we make requests
    // we might run into errors when trying to delete contacts that we've added
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {
        console.log(e);
    } finally {
        // Delete contact from UI anyway
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    }
}