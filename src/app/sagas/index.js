import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects'

export default sagaMW = createSagaMiddleware();

export function* rootSaga(){
  yield all([]);
}