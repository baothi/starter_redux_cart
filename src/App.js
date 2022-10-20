import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that use to update store

import {createStore} from "redux"
import reducer from "./reducer";
// dispatch method - send action to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - What kind of action
// don't mutate the state - redux build on IMMUTABILITY(copy)
import { Provider } from "react-redux";
// instial store
const initialStore = {
  cart:cartItems,
  total:105,
  amount:5
}

// store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
