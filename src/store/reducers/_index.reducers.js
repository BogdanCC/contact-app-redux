/** 
 * This file is the 'meeting place' of all our reducers 
 */

// Import redux method to combine all of our reducers
import { combineReducers } from 'redux';
// Import our reducers
import contactReducer from './contact.reducer';

// Exporting them using combineReducers()
export default combineReducers({
    contact: contactReducer,
});