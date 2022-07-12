import { useState } from 'react'
import React, {Component} from 'react'
import "antd/dist/antd.css";

import NoteListContainer from './containers/noteListContainer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NoteListContainer />
    </div>
  )
}

export default App;
