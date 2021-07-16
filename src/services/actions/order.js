import {fetchOrder} from '../api'

export const ORDER_CHECKOUT_REQUEST = 'ORDER_CHECKOUT_REQUEST';
export const ORDER_CHECKOUT_SUCCESS = 'ORDER_CHECKOUT_SUCCESS';
export const ORDER_CHECKOUT_FAILED = 'ORDER_CHECKOUT_FAILED';


export const placeOrder = (ingredients) => {
  console.log('placeOrder()');
  return function(dispatch) {
    dispatch({type: ORDER_CHECKOUT_REQUEST});
    fetchOrder(ingredients)
    .then(res => {
      console.log('Placeorder:', res);
      return dispatch({type:ORDER_CHECKOUT_SUCCESS, order: res.order})})
    .catch(()=>dispatch({type: ORDER_CHECKOUT_FAILED}))
  };
}
