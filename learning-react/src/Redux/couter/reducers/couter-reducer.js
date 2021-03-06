import * as types from '../actions/type';

// khoi tao state : mac dinh ban dau
const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: action.payload.val + 1
      }
    case types.DECREMENT: 
      return {
        ...state,
        count: action.payload.val - 1
      }
    default:
      return state;
  }
}