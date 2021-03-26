import {takeLatest, takeEvery, put,all, call} from 'redux-saga/effects';
import {getData} from '../services/httpService';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//get Response from this link => https://reqres.in/api/users?page=1

function* createInputHandler(){
    yield delay(3000);
    const result = yield getData('https://reqres.in/api/users?page=1');
    yield put({type : 'INCREMENT_SUCCESS' , payload : result.data.data});
}

function* createInputWatcher(){
    yield takeLatest('INCREMENT', createInputHandler);
}

export default function* rootSaga(){
    yield all([
        createInputWatcher(),
    ])
}