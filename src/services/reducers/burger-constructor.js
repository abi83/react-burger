import {ADD_INGREDIENT, REMOVE_INGREDIENT} from '../actions/burger-constructor';

const initialState = {
  bun: null,
  inner: []
};


export const selectedIngredientsReducer= (state=initialState, action) => {
  console.log('In REDUCER', state, action);
  switch (action.type) {
    case ADD_INGREDIENT:{
      if (action.item.type === 'bun') {
        return {...state, bun: action.item};
      }
      return {...state, inner: [...state.inner, action.item]};
    }
    case REMOVE_INGREDIENT:{
      console.log('Remove!', action);
      return {...state, inner: state.inner.filter(item=>item._id !== action.item._id)};
    }
    case '@@INIT':{return initialState} //TODO: Fix it!
    default: {
      return state;
    }
  }
};