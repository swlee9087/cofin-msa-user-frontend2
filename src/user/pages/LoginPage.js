import React from 'react'
import {UserLogin,UserLost,UserJoin} from 'user'


export default function LoginPage(){
    return(
        <div>
            <text align="center"><h1><b>로그인</b></h1></text>
            <br/><br/>
            <UserLogin/>
            <br/><br/>
            <UserLost/>
            <br/><br/>
            <UserJoin/>
            <br/><br/>
        </div>
    )
}