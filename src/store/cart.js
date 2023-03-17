const ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART";

export const populateCart = (productId) => {
  return {
    type: ADD_ITEM_TO_CART,
    productId,
  };
};

export default function cartReducer(state = {}, action) {
  const id = action.productId;
  let newState = { ...state };
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      newState[id] = { item: id, count: 1 };
      return newState;
    default:
      return state;
  }
}
