import React from 'react'
import { withStyles,makeStyles } from '@material-ui/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Paper
  } from "@material-ui/core";
import axios from 'axios';

// axios.get('/');


function createData(idx,date,time,location_id,location_name,msg_content){
    // return{id,date,time,city,district,msg};
    return{idx,date,time,location_id,location_name,msg_content};
}

const rows = [
    createData(1,'2020-01-26','15:14:08','97','경상북도 포항시','[포항시청]12.27 900번버스 구룡포시장정류장08:10→남구보건소정류장08:33 남구보건소정류장09:17→구룡포시장정류장09:42 탑승객은 보건소 검사바람'),
    createData(1,'2020-01-26','15:14:08','97','경상북도 포항시','[포항시청]12.27 900번버스 구룡포시장정류장08:10→남구보건소정류장08:33 남구보건소정류장09:17→구룡포시장정류장09:42 탑승객은 보건소 검사바람'),
    createData(1,'2020-01-26','15:14:08','97','경상북도 포항시','[포항시청]12.27 900번버스 구룡포시장정류장08:10→남구보건소정류장08:33 남구보건소정류장09:17→구룡포시장정류장09:42 탑승객은 보건소 검사바람'),
    createData(1,'2020-01-26','15:14:08','97','경상북도 포항시','[포항시청]12.27 900번버스 구룡포시장정류장08:10→남구보건소정류장08:33 남구보건소정류장09:17→구룡포시장정류장09:42 탑승객은 보건소 검사바람'),
    createData(1,'2020-01-26','15:14:08','97','경상북도 포항시','[포항시청]12.27 900번버스 구룡포시장정류장08:10→남구보건소정류장08:33 남구보건소정류장09:17→구룡포시장정류장09:42 탑승객은 보건소 검사바람'),
    createData(1,'2020-01-26','15:14:08','97','경상북도 포항시','[포항시청]12.27 900번버스 구룡포시장정류장08:10→남구보건소정류장08:33 남구보건소정류장09:17→구룡포시장정류장09:42 탑승객은 보건소 검사바람'),
    
];

const useStyles = makeStyles({
    table:{
        minWidth:700,
    },
});

export default function MsgTable(){
    const classes = useStyles();
    return (
        <div align="center" style={{ display: "inline-block" }}>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell onclick="sortColumn('id')">ID/ <code>id</code></StyledTableCell>
                        <StyledTableCell onclick="sortColumn('date')">date/ <code>date</code></StyledTableCell>
                        <StyledTableCell onclick="sortColumn('time')">time/ <code>time</code></StyledTableCell>
                        <StyledTableCell>location_id/ <code>location_id</code></StyledTableCell>
                        <StyledTableCell>location_name/ <code>location_name</code></StyledTableCell>
                        <StyledTableCell>msg_content/ <code>msg_content</code></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component ="th" scope="row">{row.id}</StyledTableCell>  
                            {/* autoGen??  */}
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.time}</StyledTableCell>
                            <StyledTableCell align="center">{row.location_id}</StyledTableCell>
                            <StyledTableCell align="center">{row.location_name}</StyledTableCell>
                            <StyledTableCell align="center">{row.msg_content}</StyledTableCell> 
                            {/* <StyledTableCell>tag/ <code>message_tag</code></StyledTableCell> */}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></div>
    );
}

const StyledTableCell = withStyles(theme => ({
    head:{
        backgroundColor: 'darkgrey', 
        color: 'white',
    },
    body:{
        fontSize: 14,
    },

}))(TableCell);

const StyledTableRow = withStyles(theme=>({
    row: {
        '&:hover':{backgroundColor: 'rgba(33,150,243,0.5'}
    }
}))(TableRow);