import {createAction, handleActions} from 'redux-actions';

import axios from 'axios';
import {call, put, takeEvery } from 'redux-saga/effects'

//define action types
const GET_WEATHER_PENDING ='GET_WEATHER_PENDING';
const GET_WEATHER_SUCCESS= 'GET_WEATHER_SUCCESS';
const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

const API_KEY = 'e885401961b8ce04d9f51269152753c6';

//function for asynchronous request 
function getAPI(){
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&APPID=${API_KEY}`)
}

export const getWeather = createAction(GET_WEATHER_PENDING);

function* getWeatherSaga(action){
  try {
    const response = yield call(getAPI, action.payload);
    yield put({type:GET_WEATHER_SUCCESS, payload: response.data});
  } catch(e){
    yield put({type:GET_WEATHER_FAILURE, payload:e})
  }
}

export function* weatherSaga(){
  yield takeEvery('GET_WEATHER_PENDING', getWeatherSaga);
}


const initialState = {
  pending: false,
  error:false,
  data :{
    area: "",
    temp: 0,
    weather: "",
  }
}

//define weather reducer function
export default handleActions(
  {
    [GET_WEATHER_PENDING]: (state, action)=> {
      return {
        ...state,
        pending: true,
        error: false,
      }
    },
    [GET_WEATHER_SUCCESS]: (state, action) => {
      const area = action.payload.name;
      const temp = action.payload.main.temp;
      const weather = action.payload.weather[0].main;

      return {
        ...state,
        pending: false,
        data: {
          area: area,
          temp:temp,
          weather: weather
        }
      }
    },
    [GET_WEATHER_FAILURE]: (state, action) => {
      return {
        ...state, 
        pending: false,
        error: true
      }
    }
  },
  initialState
)
