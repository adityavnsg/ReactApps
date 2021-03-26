import {takeLatest, put, all} from 'redux-saga/effects';

const delay = (ms)=> new Promise(res => setTimeout(res, ms));

function* addToCartHandler(){
    yield delay(1000);
    yield put({type: 'ADD_TO_CART_SUCCESS', payload: 1});
}

function* addToCartActionWatcher(){
    yield takeLatest('ADD_TO_CART', addToCartHandler);
}

export default function* rootSaga(){
    yield all ([
        addToCartActionWatcher(),
    ])
}