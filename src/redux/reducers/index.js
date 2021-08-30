import { combineReducers } from 'redux';
import posts from './posts.reducer';
import books from './books.reducer';
import user from './user.reducer';

export default combineReducers({
  posts,
  books,
  user,
});
