import React from 'react'
import SearchBox from './SearchBox';

export default function Navigation(){
    return(
        <div>
            <ul id='nav' type='none'>
                <li><a href="/medpt">medpt</a></li>
                <li><a href="/medpt_table">medpt table</a></li>
                <li><a href="/msg">message</a></li>
                <li><a href="/msg_table">message table</a></li>
                <li><a href="/news">news</a></li>
                <li><a href="/news_table">news table</a></li>
                <li><br /><br /></li>
                <li><a href="/loginpg">login page</a></li>
                <li><a href="/userpg">user page</a></li>
                <li><br /><br /></li>
                <li><a href="/login">login component</a></li>
                {/* <li><a href="/logout">logout component</a></li> */}
                <li><a href="/join">join component</a></li>
                <li><a href="/lost">lost component</a></li>
                <li><a href="/userinfo">user info component</a></li>
                <li><a href="/unregis">unregister component</a></li>
                <li><br /><br /></li>
                <li><SearchBox/></li>
                <li><br /><br /></li>
            </ul>
        </div>
    );  
}