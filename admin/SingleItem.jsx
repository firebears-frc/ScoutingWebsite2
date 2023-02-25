import React, { Suspense, useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getData } from '../src/FirebaseAPI';

var rows = [];
async function getDataFromDB(){
  rows = await getData();
  rows.sort((a,b) => {
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
}

getDataFromDB();


export default function BasicTable() {
  return (
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
            <TableCell align="right">Won Match</TableCell>
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
              <TableCell align="right">{row.WonMatch == true ? "Won" : "Lost"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}