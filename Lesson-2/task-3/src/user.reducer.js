const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

const initialState = {
  userList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case DELETE:
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.id),
      };
    default:
      return state;
  }
};

export default userReducer;
