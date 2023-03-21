import React, {useEffect,useState} from 'react'
import styles from "./TeamSelection.module.css"

const TeamSelection = ({CallbackFunction}) => {
  const params = new URLSearchParams(window.location.search);
  const team = params.get("team");
  const match = params.get("match");

  const [teamNum,setTeam] = useState(0); 
  const [matchNum,setMatch] = useState(0);

  useEffect(() => {
    setTeam(team);
    setMatch(match);
  },[]);
  

  return (
    <div style={{width: '100%', height: '100%', backgroundColor: 'rgba(50,50,50,0.8)', position: 'fixed', top: '0%', zIndex: '99999999 !importiant', display: 'block'}}>
        <div className={styles.z} style={{width: '80%', height: '80%', backgroundColor: 'var(--Background)', border: '2px solid var(--Text)', borderRadius: '8px',position: 'absolute', top: '10%', left: '10%', zIndex: '99999 !importiant'}}>

            <div style={{width: '100%',height: '8%',color: 'var(--Text)',fontSize: '4vh', borderBottom: '1px solid white', display: 'block', zIndex: '99999 !importiant'}}>Match Number:</div>
            <input value={matchNum} onChange={(event) => {setMatch(event.target.value)}} type='number' style={{width: '20%', height: '10%', marginTop: '1%', zIndex: '99999 !importiant', marginBottom: "3%", display: 'block', backgroundColor: 'var(--ButtonsMain)', color: 'var(--Text)'}}></input>

            <div style={{width: '100%',height: '8%',color: 'var(--Text)',fontSize: '4vh', borderBottom: '1px solid white', display: 'block', zIndex: '99999 !importiant'}}>Team Number:</div>
            <input value={teamNum} onChange={(event) => {setTeam(event.target.value)}}  type='number' style={{width: '20%', zIndex: '99999 !importiant', height: '10%', marginTop: '1%', marginBottom: "3%", display: 'block', backgroundColor: 'var(--ButtonsMain)', color: 'var(--Text)'}}></input>
            {/*
            <select style={{width: '80%', height: '8%', marginLeft: '10%', marginTop: '1%'}}>
              <option value="2846">Firebears</option>
              <option value="1010">Binary</option>
              <option value="0000">N/A</option>
            </select>
            */}
            
            <button
            style={{
              width: '100%',
              height: 'auto',
              position: 'absolute',
              bottom: '0%',
              color: 'var(--Text)',
              border: '2px solid var(--Text)',
              borderRadius: '8px',
              backgroundColor: 'var(--ButtonsMain)'
            }}
            onClick={
              () => {                
                CallbackFunction(teamNum,matchNum)
              }
            }
            >CONFIRM</button>
        </div>
    </div>
  )
}

export default TeamSelection