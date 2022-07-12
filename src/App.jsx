import React, {useEffect} from 'react'
import "antd/dist/antd.css";
import axios from 'axios';

import NoteListContainer from './containers/noteListContainer';
const API_KEY = 'e885401961b8ce04d9f51269152753c6'

const App = ()=> {
  useEffect(()=> {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&APPID=${API_KEY}`)
    .then((response)=> {
      console.log(response.data)
    })
  }, [])
  return (
    <div style={{padding: "2em"}}>
      <NoteListContainer />
    </div>
  )
}

export default App;
