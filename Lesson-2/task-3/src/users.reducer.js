const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

const initialState = {
  usersList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.user),
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.id),
      };
    default:
      return state;
  }
};

