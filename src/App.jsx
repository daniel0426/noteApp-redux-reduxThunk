import React, {useEffect} from 'react'
import "antd/dist/antd.css";
import axios from 'axios';

import NoteListContainer from './containers/noteListContainer';
import WeatherContainer from './containers/weatherContainer';

const App = ()=> {
  return (
    <div style={{padding: "2em"}}>
      <WeatherContainer/>
      <NoteListContainer/>
    </div>
  )
}

export default App;
