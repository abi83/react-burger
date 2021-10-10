import {
  ORDER_CHECKOUT_FAILED,
  ORDER_CHECKOUT_REQUEST,
  ORDER_CHECKOUT_SUCCESS
} from '../actions/order';

const initialState = {
  order: {number: '???'},
  orderRequest: false,
  orderFailed: false
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CHECKOUT_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case ORDER_CHECKOUT_SUCCESS: {
      return {
        order: action.order,
        orderRequest: false,
        orderFailed: false
      };
    }
    case ORDER_CHECKOUT_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      };
    }
    default: {
      return state;
    }
  }
};
