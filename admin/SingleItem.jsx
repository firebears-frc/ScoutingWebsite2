import React, { Suspense, useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getData } from '../src/FirebaseAPI';
import { Container } from '@mui/material';

const BasicTable = () => {
  const [rows,setRows] = useState([]);
  const [allData,setData] = useState([]);

  const [teamNum,setTeam] = useState('',onDataChanged);
  const [matchNum,setMatch] = useState('',onDataChanged);

  async function getDataFromDB(){
    let r = await getData();

    //Sorting
    r.sort((a,b) => {
      const matchA = a.MatchNumber;
      const matchB = b.MatchNumber;
    
      if (matchA < matchB) {
        return -1;
      }
      if (matchA > matchB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    //Remove Dupes
    var result = r.reduce((unique, o) => {
      if(!unique.some(obj => obj.MatchNumber === o.MatchNumber && obj.TeamNumber === o.TeamNumber)) {
        unique.push(o);
      }
      return unique;
    },[]);


    setData(result);
    setRows(result);
  }

  function onDataChanged(){
    console.log(allData);

    let newArr = [];
    allData.map((row) => {
      //Team Searching
      let can = true;
      if(teamNum != 0 && teamNum != ""){
        if(!String(row.TeamNumber).includes(teamNum)){
          can = false;
        }
      }

      if(matchNum != 0 && parseInt(matchNum) > 0 && matchNum != ""){
        console.log(row.MatchNumber +" "+ parseInt(matchNum));
        if(row.MatchNumber != parseInt(matchNum)){
          can = false;
        }
      }

      if(can) newArr.push(row);
    });

    setRows(newArr);
  }
  
  useEffect(() => {
    if(allData == 0) getDataFromDB();
    onDataChanged();
  },[teamNum,matchNum])

  return (
    <Container style={{padding: '0', margin: '0'}}>
      {/** OTHER THANGS / NAV */}
      <div style={{width: '100%', height: '9%', position: 'fixed', display: 'inline', backgroundColor: 'rgb(50,50,50)', color: 'white'}}>
        <input onChange={(event) => {setTeam(event.target.value);}} type='number' placeholder='Team Number' style={{width: '20%', height: 'auto',display: 'inline'}}></input>
        <input onChange={(event) => {setMatch(event.target.value);}} type='number' placeholder='Match Number' style={{width: '20%', height: 'auto',display: 'inline', position: 'absolute', top: '50%', left: '0'}}></input>
      </div>

      <div style={{paddingBottom: '7.5%'}}></div>

      {/** TABLE */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="left">Match Number</TableCell>
              <TableCell>Team Number</TableCell>
              <TableCell align="right">AUTO Total Cones</TableCell>
              <TableCell align="right">AUTO Total Cubes</TableCell>
              <TableCell align="right">TeleOp Total Cones</TableCell>
              <TableCell align="right">TeleOp Total Cubes</TableCell>
              <TableCell align="right">Auto Docked?</TableCell>
              <TableCell align="right">TeleOp Docked?</TableCell>
              <TableCell align="right">Extra Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.MatchNumber}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.TeamNumber}
                </TableCell>
                <TableCell align="right">{row.A_ConesHigh + row.A_ConesMid + row.A_ConesLow}</TableCell>
                <TableCell align="right">{row.A_CubesHigh + row.A_CubesMid + row.A_CubesLow}</TableCell>
                <TableCell align="right">{row.TO_ConesHigh + row.TO_ConesMid + row.TO_ConesLow}</TableCell>
                <TableCell align="right">{row.TO_CubesHigh + row.TO_CubesMid + row.TO_CubesLow}</TableCell>
                <TableCell align="right">{row.AutoBalanced == 0 ? "Off" : row.AutoBalanced == 2 ? "Docked" : row.AutoBalanced == 3 ? "Docked & Engaged" : ""}</TableCell>
                <TableCell align="right">{row.EndGame == 0 ? "Off" : row.EndGame == 1 ? "Parked" : row.EndGame == 2 ? "Docked" : "Docked & Engaged"}</TableCell>
                <TableCell align="right">{row.Notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default BasicTable