import { createStore } from "redux";
import reducer from "./reducers";

// initialize the global store object
const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

// create the store with the initial state and the root reducer
const store = createStore(reducer, initialState);

export default store;
