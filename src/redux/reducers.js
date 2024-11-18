// src/redux/reducers.js
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './actions';

const initialState = {
  items: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }

  if (action.type === UPDATE_ITEM) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ),
    };
  }

  if (action.type === DELETE_ITEM) {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
    };
  }

  return state;
};

export default rootReducer;
