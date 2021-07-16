import {OPEN_DETAIL_INGREDIENT, CLOSE_DETAIL_INGREDIENT} from '../actions/ingredient-detail';

const initialState = {
  ingredientDetail: null,
};


export const ingredientDetailReducer= (state=initialState, action) => {
  switch (action.type) {
    case OPEN_DETAIL_INGREDIENT:{
      return {ingredientDetail: action.item};
    }
    case CLOSE_DETAIL_INGREDIENT:{
      return {ingredientDetail: null};
    }
    default: {
      return state;
    }
  }
};