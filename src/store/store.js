import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/_index.reducers';

// Rquired initial state for store, can be an empty object
const initialState = {};

// Middlewares for store
const middleware = [thunk];

// Create the store - rootReducer is the combined reducers in reducers/index.js
//                  - compose helps us pass more args to createStore including the window redux dev tools
const store = createStore(rootReducer, initialState, 
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


// Export the store - We use it by importing it in the main application component
//                  - Then we pass it down in a <Provider> component as a prop (e.g <Provider store={store}>)
export default store;