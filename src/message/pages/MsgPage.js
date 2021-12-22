import React from 'react'
import MsgTable from '../components/MsgTable'

export default function MsgPage(){
    return(
        <div align="center" style={{ display: "inline-block" }}>
            <text align="center"><h1><b>재난문자</b></h1></text>
            {/* searchbox on top */}
            <MsgTable/>
            {/* number of rows/info + page arrowss */}
        </div>
    )
}