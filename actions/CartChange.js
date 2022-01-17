import { CART_CHANGE, ADD_ITEM } from "../constants/index";
export function changeCart(cart) {
  return {
    type: CART_CHANGE,
    payload: cart,
  };
}

export function addItem(item) {

  return {
    type: ADD_ITEM,
    payload: item,
  };
}
