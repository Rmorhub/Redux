import { SET_USER, REMOVE_USER } from './user.actions';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        user: action.payload.user,
      };
    }
    case REMOVE_USER: {
      return null;
    }
    default:
      return state;
  }
};
