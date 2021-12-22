import React from 'react'
import {UserInfo} from 'user'

export default function UserPage(){
    return(
        <div align="center" style={{ display: "inline-block" }}>
            <ul type='none'>
            <li><UserInfo/></li>
            <br/><br/>
            <li><a href="unregis">회원 탈퇴</a></li>
            <br/><br/>
            <li><a href="join">회원 가입</a></li>
            </ul>
        </div>
    )
};