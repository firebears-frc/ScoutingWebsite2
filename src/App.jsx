import React, { Suspense, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import TeamSelection from './components/TeamSelection';
import ButtonList from './components/ButtonList';
import AutoTick from './components/AutoTick';
import WLTick from './components/WLTick';

const Light = await import('./themes/Light.css');
const Dark = await import('./themes/Dark.css');

const Themes = [
  'Dark',
  'Light'
]

function App() {
  const [choosingTeam,setChooseTeam] = useState(true);
  const [TeamNumber,setTeamNumber] = useState(0);
  const [MatchNumber,setMatchNumber] = useState(0);

  function onTeamChoose(Team,Match){
    console.log("Got Team @ " + Team + " : " + Match);
    if(Team == 0 || Match == 0 || Team == null || Match == null) setChooseTeam(true);
    else {
      setChooseTeam(false);
      setTeamNumber(parseInt(Team));
      setMatchNumber(parseInt(Match));
    }
  }

  let ArrayToSelect = function(X) {
    return <option>{X}</option>;
  };

  const [Theme,setTheme] = useState("Dark");
  function changeTheme(theme){
    setTheme(theme);
  }

  useEffect(() => {
    //import(`./themes/${theme}.css`);
  }, [])
  

  return (
    <Suspense>
      <Theme/>
      <div style={{width: "100%", height: "100%", backgroundColor: "var(--Background)"}} className="App">
      {
        choosingTeam ? <TeamSelection CallbackFunction={onTeamChoose}/> : ""
      }

      <div style={{width: '100%', height: '100%', backgroundColor: "var(--Background)", position: 'fixed', display: 'block', zIndex: '-2'}} />
      
      <div
      style={{
        color: "white",
        borderBottom: '1px solid white',
        paddingBottom: '1px',
        marginBottom: '4px',
        justifyContent: 'right',
        textAlign: 'right',
        color: 'var(--Text)',
        fontWeight: 'bold'
      }}>

      Match #{MatchNumber} | Team #{TeamNumber}

      <button
        style={{
          marginLeft: '5px',
          height: '100%',
          width: 'auto',
          backgroundColor: 'var(--ButtonsMain)',
          color: 'var(--Text)'
        }}    
        onClick={() => {setChooseTeam(true)}}
      >Logout</button>
      <select onChange={changeTheme} style={{backgroundColor: 'var(--ButtonsMain)', color: 'var(--Text)', width: '15%', height: '100%'}}>{Themes.map(ArrayToSelect)}</select>
      </div>
      <div style={{width: "auto", borderBottom: "1px solid white", paddingBottom: '12px'}}>
        <ButtonList Title="Cones High" isCone={true}/>
        <ButtonList Title="Cones Mid" isCone={true}/>
        <ButtonList Title="Cones Bottom" isCone={true}/>
      </div>
      <div style={{width: "auto", borderBottom: "1px solid white", paddingBottom: '12px'}}>
        <ButtonList Title="Cubes High"/>
        <ButtonList Title="Cubes Mid"/>
        <ButtonList Title="Cubes Bottom"/>
      </div>
      {/** AUTO */}
      <div style={{width: "auto", borderBottom: "1px solid white", paddingBottom: '12px'}}>
        <AutoTick Title={"AUTO Balanced On Charge Station"}/>
        <AutoTick Title={"ENDGAME Charge Station"} isEnd={true}/>
      </div>

      {/** WIN / LOSE */}
      <div style={{width: "auto", borderBottom: "1px solid white", paddingBottom: '12px'}}>
        <WLTick Title={"Won Match?"}/>
      </div>
    </div>
    </Suspense>
  )
}

export default App
