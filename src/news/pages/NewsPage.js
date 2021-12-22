import React from 'react'
import NewsTable from '../components/NewsTable'

export default function NewsPage(){
    return(
        <div align="center" style={{ display: "inline-block" }}>       
            <text align="center"><h1><b>코로나19 관련 뉴스</b></h1></text>
            <table style={{width:"1200px", height:"800px", margin:"0 auto", alignItems:'center center'}}>
            <tr style={{width:"100%", height:"15%"}}>
                <td style={{width:"30%"}}>
                    <tr></tr>
                    </td>
                <td>
                    <NewsTable/>
                    </td>
            {/* number of rows/info + page arrowss */}
            </tr>
            </table>
        </div>
    )
}
