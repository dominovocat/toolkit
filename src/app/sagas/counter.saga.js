import { call, put, takeLatest } from "redux-saga/effects";
import * as api from '../../api/counterAPI'
import { incrementError, incrementRequest, incrementSuccess } from "../slices/counterSlice";

export function* incrementSaga(action) {
  try {
    const responce = yield call(api.incrementAsync, action.payload);
    yield put(incrementSuccess(responce));
  } catch (error) {
    yield put(incrementError(error));
  }
}
export default function* counterSaga(){
  yield takeLatest(incrementRequest.type,incrementSaga);
}