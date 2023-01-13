import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import Ticker from './components/Ticker.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
		<Ticker></Ticker>
    </div>
  )
}

export default App
