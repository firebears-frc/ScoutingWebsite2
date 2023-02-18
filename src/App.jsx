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
    if(Team == 0 || Match == 0 || Team == null || Match == null) setChooseTeam(true);
    else {
      setChooseTeam(false);
      setTeamNumber(Team);
      setMatchNumber(Match);
    }
  }

  return (
    <div style={{width: "100%", height: "100%", backgroundColor: "#101010"}} className="App">
      {
        choosingTeam ? <TeamSelection CallbackFunction={onTeamChoose}/> : ""
      }
      
      <div
      style={{
        color: "white",
        borderBottom: '1px solid white',
        paddingBottom: '1px',
        marginBottom: '4px',
        justifyContent: 'right',
        textAlign: 'right',
      }}>
        TeamNum: {TeamNumber} | MatchNum: {MatchNumber}
      
      <button
        style={{
          marginLeft: '5px',
          height: '100%',
          width: 'auto',
        }}
        onClick={() => {setChooseTeam(true)}}
      >Logout</button>
      </div>
      <div style={{width: "auto", borderBottom: "1px solid white"}}>
        <ButtonList Title="Cones High"/>
        <ButtonList Title="Cones Mid"/>
        <ButtonList Title="Cones Bottom"/>
      </div>
      <div style={{width: "auto", borderBottom: "1px solid white"}}>
        <ButtonList Title="Cubes High"/>
        <ButtonList Title="Cubes Mid"/>
        <ButtonList Title="Cubes Bottom"/>
      </div>
    </div>
  )
}

export default App
