// Redux toolkit
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
