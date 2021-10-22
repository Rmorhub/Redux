import store from './store';
import { addUser, deleteUser } from './user.actions';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 10, name: 'Bob' }));
store.dispatch(addUser({ id: 11, name: 'Tom' }));
store.dispatch(addUser({ id: 15, name: 'Ann' }));
store.dispatch(addUser({ id: 18, name: 'Ted' }));

store.dispatch(deleteUser(10));

console.log(store.getState());
