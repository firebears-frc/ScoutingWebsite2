import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import Ticker from './components/Ticker.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width: "100%", height: "100%", backgroundColor: "green"}} className="App">

    </div>
  )
}

export default App
