import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import TeamSelection from './components/TeamSelection';
import ButtonList from './components/ButtonList';

function App() {
  const [choosingTeam,setChooseTeam] = useState(true);
  const [TeamNumber,setTeamNumber] = useState(0);
  const [MatchNumber,setMatchNumber] = useState(0);

  function onTeamChoose(Team,Match){
    console.log("Got Team @ " + Team + " : " + Match);
    setTeamNumber(Team);
    setMatchNumber(Match);
    setChooseTeam(false);
  }

  return (
    <div style={{width: "100%", height: "100%", backgroundColor: "#101010"}} className="App">
      {
        choosingTeam ? <TeamSelection CallbackFunction={onTeamChoose}/> : ""
      }
      
      <ButtonList Title="CONES Picked Up"/>
      <ButtonList Title="CUBES Picked Up"/>
    </div>
  )
}

export default App
