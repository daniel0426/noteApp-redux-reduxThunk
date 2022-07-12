import { combineReducers } from 'redux';
import noteReducer from './note';
import weatherReducer from './weather';

export default combineReducers({
  note : noteReducer,
  weather: weatherReducer
})