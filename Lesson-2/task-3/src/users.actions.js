const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

export const addUser = user => ({
  type: ADD,
  user,
});

export const deleteUser = id => ({
  type: DELETE,
  id,
});
