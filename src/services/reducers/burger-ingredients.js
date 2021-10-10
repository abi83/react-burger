import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
} from '../actions/burger-ingredients'
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../actions/burger-constructor'

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ingredients: action.items.map((item) => {
          return { ...item, count: 0 }
        }),
        ingredientsRequest: false,
        ingredientsFailed: false,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      }
    }
    case ADD_INGREDIENT: {
      // increase ingredient.count by one
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          if (ingredient._id === action.item._id) {
            return { ...ingredient, count: ingredient.count + 1 }
          }
          return ingredient
        }),
      }
    }
    case REMOVE_INGREDIENT: {
      // decrease ingredient.count by one
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          if (ingredient._id === action.item._id) {
            return { ...ingredient, count: ingredient.count + 1 }
          }
          return ingredient
        }),
      }
    }
    default: {
      return state
    }
  }
}
