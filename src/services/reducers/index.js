import { combineReducers } from 'redux';
import {ingredientsReducer} from './burger-ingredients'
import {selectedIngredientsReducer} from './burger-constructor'
import {orderReducer} from './order'

export const rootReducer = combineReducers({
  selectedIngredientsReducer,
  ingredientsReducer,
  orderReducer
});
