import { CART_CHANGE } from "../constants/index";

const initialState = {
  cart: [{ id: 1 }],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARTCHANGE":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_ITEM":
      console.log("testing successful");
      return {
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
export default cartReducer;
