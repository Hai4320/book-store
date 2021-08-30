import { takeLatest, call, put } from 'redux-saga/effects'
import * as postActions from '../actions/posts.actions'
import * as apis  from '../../apis'

function* fetchPostsSaga(action) {
    try {
      const posts = yield call(apis.fetchPosts);
      yield put(postActions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
      console.error(err);
      yield put(postActions.getPosts.getPostsFailure(err));
    }
  }

//generator function
function* mySaga(){
    yield takeLatest(postActions.getPosts.getPostsRequest, fetchPostsSaga)
}
export default mySaga;