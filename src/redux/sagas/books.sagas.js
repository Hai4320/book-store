import * as apis from '../../apis'
import * as booksActions from '../actions/books.actions'
import {takeLatest, put , call} from 'redux-saga/effects'



function* fetchBooksSaga(action) {
    try {
      const books = yield call(apis.fetchBooks);
      yield put(booksActions.getBooks.getBooksSuccess(books.data));
    } catch (err) {
      console.error(err);
      yield put(booksActions.getBooks.getBooksFailure(err));
    }
  }
function* fetchBookByIdSaga(actions)
{
  try{
    const book = yield call(apis.fetchBookById, actions.payload);
    yield put(booksActions.getBookById.getBookByIdSuccess(book.data))
  } catch(err){
    console.error(err)
    yield put(booksActions.getBookById.getBookByIdFailure(err));
  }
}
//generator function
function* mySaga(){
    yield takeLatest(booksActions.getBooks.getBooksRequest, fetchBooksSaga);
    yield takeLatest(booksActions.getBookById.getBookByIdRequest, fetchBookByIdSaga);
}
export default mySaga;