import { combineReducers } from 'redux';
import noteReducer from './note';
// import weatherReducer from './weather';
import weatherReducer, {weatherSaga} from './weather-saga'
import {all} from 'redux-saga/effects';


export default combineReducers({
  note : noteReducer,
  weather: weatherReducer
})

export function* rootSaga(){
  yield all([weatherSaga()])
}

