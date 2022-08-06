import { CART_CHANGE } from "../constants/index";

const initialState = {
  cart: [],
  user : {name : "hamza"}
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
    case "ADD_USER":
      console.log("testing");
      return {
        ...state,
        user : action.payload
      }   
    default:
      return state;
  }
};
export default cartReducer;
