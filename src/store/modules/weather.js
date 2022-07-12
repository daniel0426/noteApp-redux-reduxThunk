import {handleActions} from 'redux-actions';

import axios from 'axios';

//define action types
const GET_WEATHER_PENDING ='GET_WEATHER_PENDING';
const GET_WEATHER_SUCCESS= 'GET_WEATHER_SUCCESS';
const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

const API_KEY = 'e885401961b8ce04d9f51269152753c6';

//function for asynchronous request 
function getAPI(){
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&APPID=${API_KEY}`)
}

//thunk function 
export const getWeather = ()=> async (dispatch)=> {
  dispatch({type:GET_WEATHER_PENDING});

  try {
    const response = await getAPI();
    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: response.data
    });
  } 
  catch(err){
    dispatch({
      type:GET_WEATHER_FAILURE,
      payload:err,
    });
    throw err;
  }
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
