import { takeLatest, put, all } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* addtoCartHandler() {
    yield delay(3000);
    yield put({ type: 'ADDED_TO_CART_FAILURE'});
}

function* addToCartActionWatcher() {
    yield takeLatest('ADD_TO_CART', addtoCartHandler);
}

export default function* rootSaga() {
    yield all([
        addToCartActionWatcher(),
    ]);
}