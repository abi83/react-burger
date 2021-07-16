import {fetchOrder} from '../api'

export const ORDER_CHECKOUT_REQUEST = 'ORDER_CHECKOUT_REQUEST';
export const ORDER_CHECKOUT_SUCCESS = 'ORDER_CHECKOUT_SUCCESS';
export const ORDER_CHECKOUT_FAILED = 'ORDER_CHECKOUT_FAILED';


export function placeOrder() {
  return function(dispatch) {
    dispatch({type: ORDER_CHECKOUT_REQUEST});
    fetchOrder()
    .then(res => dispatch({type:ORDER_CHECKOUT_SUCCESS, order: res.data}))
    .catch(()=>dispatch({type: ORDER_CHECKOUT_FAILED}))
  };
}
