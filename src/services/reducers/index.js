import { combineReducers } from 'redux';
import {ingredientsReducer} from './burger-ingredients'
import {selectedIngredientsReducer} from './burger-constructor'

export const rootReducer = combineReducers({
  constructor: selectedIngredientsReducer,
  ingredients: ingredientsReducer,
});
