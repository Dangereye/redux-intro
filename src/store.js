// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';

// Redux thunk
import { thunk } from 'redux-thunk';

// Redux dev-tools
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
