import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import ButtonList from './components/ButtonList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width: "100%", height: "100%", backgroundColor: "#101010"}} className="App">
		<ButtonList></ButtonList>
    </div>
  )
}

export default App
