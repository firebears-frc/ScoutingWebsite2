import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button></Button>
    </div>
  )
}

export default App
