import React, {useMemo} from 'react'
// import styled from 'styled-components'
import { Routes, Redirect, Link, BrowserRouter, Route } from 'react-router-dom'
import Navigation from 'common/Navigation';

import { LoginPage, Unregister, UserInfo, UserJoin, UserLogin, UserLost, UserPage } from 'user';
import { NewsPage, NewsTable } from 'news';
import { MedptPage, MedptTable } from 'medpt';
import { MsgPage, MsgTable } from 'message';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}/>
      <Route path='/medpt' element={<MedptPage/>}/>
      <Route path='/medpt_table' element={<MedptTable/>}/>
      <Route path='/msg' element={<MsgPage/>}/>
      <Route path='/msg_table' element={<MsgTable/>}/>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/news_table' element={<NewsTable/>}/>

      <Route path='/loginpg' element={<LoginPage/>}/>
      <Route path='/userpg' element={<UserPage/>}/>

      <Route path='/join' element={<UserJoin/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/lost' element={<UserLost/>}/>
      <Route path='/userinfo' element={<UserInfo/>}/>
      <Route path='/unregis' element={<Unregister/>}/>
      {/* <Route path='/logout' element={<Logout/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
