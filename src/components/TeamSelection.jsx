import React from 'react'
import styles from "./TeamSelection.module.css"

const TeamSelection = () => {
  return (
    <div style={{width: '100%', height: '100%', backgroundColor: 'rgba(50,50,50,0.8)', position: 'absolute', zIndex: '99999 !importiant'}}>
        <div className={styles.z} style={{width: '80%', height: '80%', backgroundColor: 'rgb(32, 32, 32)',position: 'absolute', top: '10%', left: '10%'}}>

            <div style={{width: '100%',height: '8%',color: 'white',fontSize: '4vh', borderBottom: '1px solid white', display: 'block'}}>Match Number:</div>
            <input type='number' style={{width: '20%', height: '10%', marginTop: '1%', marginBottom: "3%", display: 'block'}}></input>

            <div style={{width: '100%',height: '8%',color: 'white',fontSize: '4vh', borderBottom: '1px solid white', display: 'block'}}>Team Number:</div>
            <select style={{width: '80%', height: '8%', marginLeft: '10%', marginTop: '1%'}}>
              <option value="2846">Firebears</option>
              <option value="1010">Binary</option>
              <option value="0000">N/A</option>
            </select>
        </div>
    </div>
  )
}

export default TeamSelection