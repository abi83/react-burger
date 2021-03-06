import { fetchIngredients } from '../api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'

export const getIngredients = () => {
  return function(dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST })
    fetchIngredients()
    .then((res) => dispatch({ type: GET_INGREDIENTS_SUCCESS, items: res }))
    .catch(() => dispatch({ type: GET_INGREDIENTS_FAILED }))
  }
}
