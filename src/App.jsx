import React, { Suspense, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import {Col,Row} from 'react-bootstrap';

import TeamSelection from './components/TeamSelection';
import ButtonList from './components/ButtonList';
import AutoTick from './components/AutoTick';
import WLTick from './components/WLTick';

import './themes/Dark.css';

import './FirebaseAPI'
import { addData } from './FirebaseAPI';

const Themes = [
  'DARK',
  'LIGHT',
]

function App() {
  const [choosingTeam,setChooseTeam] = useState(true);
  const [TeamNumber,setTeamNumber] = useState(0);
  const [MatchNumber,setMatchNumber] = useState(0);

  const [ConesHighA,setConesHighA] = useState(0);
  const [ConesMidA,setConesMidA] = useState(0);
  const [ConesLowA,setConesLowA] = useState(0);
  const [CubesHighA,setCubesHighA] = useState(0);
  const [CubesMidA,setCubesMidA] = useState(0);
  const [CubesLowA,setCubesLowA] = useState(0);

  const [ConesHighTO,setConesHighTO] = useState(0);
  const [ConesMidTO,setConesMidTO] = useState(0);
  const [ConesLowTO,setConesLowTO] = useState(0);
  const [CubesHighTO,setCubesHighTO] = useState(0);
  const [CubesMidTO,setCubesMidTO] = useState(0);
  const [CubesLowTO,setCubesLowTO] = useState(0);

  const [AutoBalanced,setAutoBalanced] = useState(0);
  const [EndGame,setEndGame] = useState(0);

  const [WonMatch,setWonMatch] = useState(false);

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

  const [Theme,setTheme] = useState("DARK");
  function changeTheme(theme){
    console.log("Setting To Theme: " + theme);
    let ThemeSet;
    if(theme == null) {setTheme('DARK'); ThemeSet = 'DARK';}
    else {setTheme(theme); ThemeSet = theme;}

    localStorage.setItem('Theme',ThemeSet);

    const Themes = document.getElementsByTagName('style');
    for(let i = 0; i < Themes.length; i++){
      const _Theme = Themes[i].firstChild.data;
      if((typeof _Theme === 'string' || _Theme instanceof String) && _Theme.includes('/*THEME=') && _Theme.includes(':root')){
        //Enable or Disable based on Theme
        let Enabled = _Theme.includes('/*THEME='+ThemeSet);
        //console.log(_Theme + "\n\n Uses: " + ThemeSet + ". so its " + Enabled);
        void(document.styleSheets.item(i).disabled=(!Enabled));
      }
    }
  }
 
  function Submit(){
    //Show Waiting To Submit Document Thingy
    //TO = TeleOp
    //A = Autonomous
    console.log("Waiting To Submit Document...")
    let Data = {
      'TeamNumber' : TeamNumber,
      'MatchNumber' : MatchNumber,
      'WonMatch' : WonMatch,

      'TO_ConesHigh' : ConesHighTO,
      'TO_ConesMid' : ConesMidTO,
      'TO_ConesLow' : ConesLowTO,

      'TO_CubesHigh' : CubesHighA,
      'TO_CubesMid' : CubesMidA,
      'TO_CubesLow' : CubesLowA,

      'A_ConesHigh' : ConesHighA,
      'A_ConesMid' : ConesMidA,
      'A_ConesLow' : ConesLowA,

      'A_CubesHigh' : CubesHighA,
      'A_CubesMid' : CubesMidA,
      'A_CubesLow' : CubesLowA,

      'AutoBalanced' : AutoBalanced,
      'EndGame' : EndGame,
    }

    console.log(Data);

    addData(Data);
    Reset();
  }

  function LoadAll(){
    //Load All Items
    setMatchNumber(localStorage.getItem('MatchNumber'));
    setTeamNumber(localStorage.getItem('TeamNumber'));

    setChooseTeam(localStorage.getItem('SavedItems') == null || localStorage.getItem('SavedItems') == 'false'
    || TeamNumber == null || TeamNumber <= 0 || MatchNumber == null || MatchNumber <= 0);

    setConesHighA(localStorage.getItem('A_ConesHigh'))
    setConesMidA(localStorage.getItem('A_ConesMid'))
    setConesLowA(localStorage.getItem('A_ConesLow'))

    setCubesHighA(localStorage.getItem('A_CubesHigh'))
    setCubesMidA(localStorage.getItem('A_CubesMid'))
    setCubesLowA(localStorage.getItem('A_CubesLow'))

    setConesHighTO(localStorage.getItem('TO_ConesHigh'))
    setConesMidTO(localStorage.getItem('TO_ConesMid'))
    setConesLowTO(localStorage.getItem('TO_ConesLow'))

    setCubesHighTO(localStorage.getItem('TO_CubesHigh'))
    setCubesMidTO(localStorage.getItem('TO_CubesMid'))
    setCubesLowTO(localStorage.getItem('TO_CubesLow'))

    setAutoBalanced(localStorage.getItem('AutoBalanced'))
    setEndGame(localStorage.getItem('EndGame'))

    setWonMatch(localStorage.getItem('WonMatch'))
  }

  function Reset(){
    localStorage.setItem('SavedItems', false);
    localStorage.setItem('TeamNumber', 0)
    localStorage.setItem('MatchNumber', 0)
    localStorage.setItem('WonMatch', false)

    localStorage.setItem('TO_ConesHigh', 0)
    localStorage.setItem('TO_ConesMid', 0)
    localStorage.setItem('TO_ConesLow', 0)

    localStorage.setItem('TO_CubesHigh', 0)
    localStorage.setItem('TO_CubesMid', 0)
    localStorage.setItem('TO_CubesLow', 0)

    localStorage.setItem('A_ConesHigh', 0)
    localStorage.setItem('A_ConesMid', 0)
    localStorage.setItem('A_ConesLow', 0)

    localStorage.setItem('A_CubesHigh', 0)
    localStorage.setItem('A_CubesMid', 0)
    localStorage.setItem('A_CubesLow', 0)

    localStorage.setItem('AutoBalanced', 0)
    localStorage.setItem('EndGame', 0)

    setChooseTeam(false);
    LoadAll();
  }

  useEffect(() => {
    changeTheme(localStorage.getItem('Theme'));
    LoadAll();

    const interval = setInterval(function() {
      //Save every X seconds
      localStorage.setItem('SavedItems', !choosingTeam);
      localStorage.setItem('TeamNumber', TeamNumber)
      localStorage.setItem('MatchNumber', MatchNumber)
      localStorage.setItem('WonMatch', WonMatch)
  
      localStorage.setItem('TO_ConesHigh', ConesHighTO);
      localStorage.setItem('TO_ConesMid', ConesMidTO);
      localStorage.setItem('TO_ConesHigh', ConesHighTO)
  
      localStorage.setItem('TO_CubesHigh', CubesHighA)
      localStorage.setItem('TO_CubesMid', CubesMidA)
      localStorage.setItem('TO_CubesLow', CubesLowA)
  
      localStorage.setItem('A_ConesHigh', ConesHighA)
      localStorage.setItem('A_ConesMid', ConesMidA)
      localStorage.setItem('A_ConesLow', ConesLowA)
  
      localStorage.setItem('A_CubesHigh', CubesHighA)
      localStorage.setItem('A_CubesMid', CubesMidA)
      localStorage.setItem('A_CubesLow', CubesLowA)
  
      localStorage.setItem('AutoBalanced', AutoBalanced)
      localStorage.setItem('EndGame', EndGame)
    }, 3000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Suspense>
      {/** TOP BAR */}
      <div style={{width: "100%", height: "100%", backgroundColor: "var(--Background)"}} className="App">
      {
        choosingTeam ? <TeamSelection CallbackFunction={onTeamChoose}/> : ""
      }

      <div style={{width: '100%', height: '100%', backgroundColor: "var(--Background)", position: 'fixed', display: 'block', zIndex: '-2'}} />
      
      <div
      style={{
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
        onClick={() => {Reset(); setChooseTeam(true);}}
      >Logout</button>
      {/**<select value={Theme} onChange={(event) => {changeTheme(event.target.value);}} style={{backgroundColor: 'var(--ButtonsMain)', color: 'var(--Text)', width: '15%', height: '100%'}}>{Themes.map(ArrayToSelect)}</select>
      */}
      </div>

      {/** AUTO PICK-UP */}
      <div style={{width: "auto", paddingBottom: '12px'}}>
        <ButtonList Value={ConesHighA} setValue={setConesHighA} Title="[AUTO] Cones High" isCone={true}/>
        <ButtonList Value={ConesMidA} setValue={setConesMidA} Title="[AUTO] Cones Mid" isCone={true}/>
        <ButtonList Value={ConesLowA} setValue={setConesLowA} Title="[AUTO] Cones Bottom" isCone={true}/>
      </div>
      <div style={{width: "auto", borderBottom: "1px solid white", paddingBottom: '12px'}}>
        <ButtonList Value={CubesHighA} setValue={setCubesHighA} Title="[AUTO] Cones High" isCone={true}/>
        <ButtonList Value={CubesMidA} setValue={setCubesMidA} Title="[AUTO] Cones Mid" isCone={true}/>
        <ButtonList Value={CubesLowA} setValue={setCubesLowA} Title="[AUTO] Cones Bottom" isCone={true}/>
      </div>

      {/** TELEOP PICK-UP */}
      <div style={{width: "auto", paddingBottom: '12px'}}>
        <ButtonList Value={ConesHighTO} setValue={setConesHighTO} Title="Cones High" isCone={true}/>
        <ButtonList Value={ConesMidTO} setValue={setConesMidTO} Title="Cones Mid" isCone={true}/>
        <ButtonList Value={ConesLowTO} setValue={setConesLowTO} Title="Cones Bottom" isCone={true}/>
      </div>
      <div style={{width: "auto", borderBottom: "1px solid white", paddingBottom: '12px'}}>
        <ButtonList Value={CubesHighTO} setValue={setCubesHighTO} Title="Cones High" isCone={true}/>
        <ButtonList Value={CubesMidTO} setValue={setCubesMidTO} Title="Cones Mid" isCone={true}/>
        <ButtonList Value={CubesLowTO} setValue={setCubesLowTO} Title="Cones Bottom" isCone={true}/>
      </div>
      {/** AUTO */}
      <div style={{width: "auto", borderBottom: "1px solid white", paddingBottom: '12px'}}>
        <AutoTick isTicked={AutoBalanced} onTicked={setAutoBalanced} Title={"AUTO Balanced On Charge Station"}/>
        <AutoTick isTicked={EndGame} onTicked={setEndGame} Title={"ENDGAME Charge Station"} isEnd={true}/>
      </div>

      {/** WIN / LOSE */}
      <div style={{width: "auto", borderBottom: "0px solid white", paddingBottom: '8px'}}>
        <WLTick isTicked={WonMatch} onTicked={setWonMatch} Title={"Won Match?"}/>
      </div>

      {/**SUBMIT*/}
      <div style={{width: "auto", borderBottom: "0px solid white", paddingTop: '0px', paddingBottom: '15px'}}>
          <Button style={{
            width: '97.5%',
            height: '100%',
            backgroundColor: 'var(--ButtonsMain)',
            color: 'var(--Text)',
            border: '0px',
            marginLeft: '15px',
            }} onClick={Submit}>SUBMIT</Button>
      </div>
    </div>
    </Suspense>
  )
}

export default App
