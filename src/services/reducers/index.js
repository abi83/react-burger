import { combineReducers } from 'redux'
import { ingredientsReducer } from './burger-ingredients'
import { selectedIngredientsReducer } from './burger-constructor'
import { orderReducer } from './order'
import { modal } from './modal'
import { authReducer } from './auth'

export const rootReducer = combineReducers({
  selectedIngredientsReducer,
  ingredientsReducer,
  orderReducer,
  modal,
  authReducer,
})
