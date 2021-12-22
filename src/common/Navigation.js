import React from 'react'
import { LoginPage,UserPage } from 'user';
import SearchBox from './SearchBox';

export default function Navigation(){
    return(
        <div>
            <ul id='nav' type='none'>
                <li><a href="/medpts">medpt</a></li>
                <li><a href="/message">message</a></li>
                <li><a href="/news">news</a></li>
                <li><a href="/user">user</a></li>
                <li><br /><br /></li>
                <li><SearchBox/></li>
                <li><br /><br /></li>
                {/* <li><LoginPage/></li>
                <li><UserPage/></li> */}
            </ul>
        </div>
    );  
}