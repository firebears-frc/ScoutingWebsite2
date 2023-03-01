import React, { Suspense, useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getData } from "../src/FirebaseAPI"
import { Container } from '@mui/material';
import BootstrapSwitchButton from "./bootstrap-switch-button-react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const barOptions = {
    plugins: {
        title: {
            display: true,
            text: 'Average Score',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const ReactTable = () => {
    const [rows, setRows] = useState([]);
    const [allData, setData] = useState([]);
    const [barData, setBarData] = useState({
        labels: ['TeamA', 'TeamB'],
        datasets: [
            {
                label: 'Cubes Score',
                data: [],
                backgroundColor: 'rgb(75, 0, 130)',
                stack: 'Stack 0',
            },
            {
                label: 'Cones Score',
                data: [],
                backgroundColor: 'rgb(255, 255, 25)',
                stack: 'Stack 0',
            },
            {
                label: 'Docked Score',
                data: [],
                backgroundColor: 'rgb(75, 192, 192)',
                stack: 'Stack 0',
            },
        ],
    });

    const [teamNum, setTeam] = useState('', onDataChanged);
    const [matchNum, setMatch] = useState('', onDataChanged);

    const [graph, setGraph] = useState(true);

    async function getDataFromDB() {
        let r = await getData();

        //Sorting
        r.sort((a, b) => {
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
            if (!unique.some(obj => obj.MatchNumber === o.MatchNumber && obj.TeamNumber === o.TeamNumber)) {
                unique.push(o);
            }
            return unique;
        }, []);
        var resultFNL = r.reduce((unique, o) => {
            if (!unique.some(obj => obj.MatchNumber === o.MatchNumber && obj.TeamNumber === o.TeamNumber)) {
                unique.push(o);
            }
            return unique;
        }, []);

        setData(resultFNL);
        setRows(resultFNL);

        //sort based on how good they are
        result.sort((a, b) => {
            const matchA = (a.TO_ConesHigh + a.TO_ConesMid + a.TO_ConesLow + a.TO_CubesHigh + a.TO_CubesMid + a.TO_CubesLow
                + a.A_ConesHigh + a.A_ConesMid + a.A_ConesLow + a.A_CubesHigh + a.A_CubesMid + a.A_CubesLow) + (a.EndGame + a.AutoBalanced);
            const matchB = (b.TO_ConesHigh + b.TO_ConesMid + b.TO_ConesLow + b.TO_CubesHigh + b.TO_CubesMid + b.TO_CubesLow
                + b.A_ConesHigh + b.A_ConesMid + b.A_ConesLow + b.A_CubesHigh + b.A_CubesMid + b.A_CubesLow) + (b.EndGame + b.AutoBalanced);

            if (matchA > matchB) {
                return -1;
            }
            if (matchA < matchB) {
                return 1;
            }

            // names must be equal
            return 0;
        });

        const names = []
        const conesData = []
        const cubesData = []
        const dockedData = []
        const Objs = [];
        let newData = barData;

        result.map((data) => {
            let D = {}
            D.name = (data.TeamNumber);
            D.conesData = (data.TO_ConesHigh + data.TO_ConesMid + data.TO_ConesLow + data.A_ConesHigh + data.A_ConesMid + data.A_ConesLow);
            D.cubesData = (data.TO_CubesHigh + data.TO_CubesMid + data.TO_CubesLow + data.A_CubesHigh + data.A_CubesMid + data.A_CubesLow);
            D.dockedData = (data.EndGame + data.AutoBalanced);
            D.count = 0;
            Objs.push(D);
        });

        Objs.sort((a, b) => {
            const matchA = a.name;
            const matchB = b.name;

            if (matchA > matchB) {
                return -1;
            }
            if (matchA < matchB) {
                return 1;
            }

            // names must be equal
            return 0;
        });


        let count = 1;
        let lastName = "";
        let cones = 0;
        let cubes = 0;
        let docks = 0;
        let objsV2 = []
        Objs.map((value) => {
            if(lastName == value.name){
                count++;
                lastName = value.name;
                cones += value.conesData;
                cubes += value.cubesData;
                docks += value.dockedData;
            }
            else if(lastName != ""){
                let D = {}
                D.name = lastName;
                D.cones = cones / count;
                D.cubes = cubes / count;
                D.docked = docks / count;
                objsV2.push(D)
                count = 0;

                count++;
                lastName = value.name;
                cones += value.conesData;
                cubes += value.cubesData;
                docks += value.dockedData;
            }
            else{
                lastName = value.name;
                count++;
                lastName = value.name;
                cones += value.conesData;
                cubes += value.cubesData;
                docks += value.dockedData;
            }
        });

        let v3 = objsV2.sort((a, b) => {
            const matchA = a.cones + a.cubes + a.docked;
            const matchB = b.cones + b.cubes + b.docked;

            if (matchA > matchB) {
                return -1;
            }
            if (matchA < matchB) {
                return 1;
            }

            // names must be equal
            return 0;
        });

        v3.map((data) => {
            //console.log(data)
            names.push(data.name)
            conesData.push(data.cones)
            cubesData.push(data.cubes)
            dockedData.push(data.docked)
        });

        newData.labels = names;
        newData.datasets[0].data = conesData;
        newData.datasets[1].data = cubesData;
        newData.datasets[2].data = dockedData;
        setBarData(newData);
    }

    function onDataChanged() {
        console.log(allData);

        let newArr = [];
        allData.map((row) => {
            //Team Searching
            let can = true;
            if (teamNum != 0 && teamNum != "") {
                if (!String(row.TeamNumber).includes(teamNum)) {
                    can = false;
                }
            }

            if (matchNum != 0 && parseInt(matchNum) > 0 && matchNum != "") {
                console.log(row.MatchNumber + " " + parseInt(matchNum));
                if (row.MatchNumber != parseInt(matchNum)) {
                    can = false;
                }
            }

            if (can) newArr.push(row);
        });

        setRows(newArr);
    }

    useEffect(() => {
        if (allData == 0) getDataFromDB();
        onDataChanged();
    }, [teamNum, matchNum])

    return (
        <Container style={{ padding: '0', margin: '0' }}>
            {/** OTHER THANGS / NAV */}
            <div style={{ width: '100%', height: '9%', position: 'fixed', display: 'inline', backgroundColor: 'rgb(50,50,50)', color: 'white' }}>
                <input onChange={(event) => { setTeam(event.target.value); }} type='number' placeholder='Team Number' style={{ width: '20%', height: 'auto', display: 'inline' }}></input>
                <input onChange={(event) => { setMatch(event.target.value); }} type='number' placeholder='Match Number' style={{ width: '20%', height: 'auto', display: 'inline', position: 'absolute', top: '50%', left: '0' }}></input>
                <BootstrapSwitchButton
                    style='info'
                    checked={graph}
                    onlabel='Grid'
                    offlabel='Graph'
                    onChange={(checked) => { setGraph(checked) }} />
            </div>

            <div style={{ paddingBottom: '7.5%' }}></div>

            {/** TABLE */}
            {
                graph ?
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
                    : <Bar options={barOptions} data={barData} />
            }
        </Container>
    );
}

export default ReactTable