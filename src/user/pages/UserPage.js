import React from 'react'
import {UserInfo} from 'user'
import { Button } from '@mui/material'

export default function UserPage(){
    return(
        <div align="center" style={{ display: "inline-block" }}>
            <ul type='none'>
            <li><UserInfo/></li>
            <br/><br/>
            <li><Button variant="outlined"><a href="unregis">회원 탈퇴</a></Button></li>
            <br/><br/>
            {/* <li><Button variant="outlined" onClick="join">회원 가입</Button></li> */}
            </ul>
        </div>
    )
};