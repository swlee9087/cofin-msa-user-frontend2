import React, {useMemo} from 'react'
// import styled from 'styled-components'
import { Routes, Redirect, Link, BrowserRouter, Route } from 'react-router-dom'
import Navigation from 'common/Navigation';

import MedptPage from "./medpt/pages/MedptPage";
import MsgPage from "./message/pages/MsgPage"
// import NewsPage from "./news/NewsPage"
import NewsPage from "./news/pages/NewsPage"
import LoginPage from "./user/pages/LoginPage"
import { Unregister, UserInfo, UserJoin, UserLogin, UserLost, UserPage } from 'user';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}/>
      <Route path='/medpt' element={<MedptPage/>}/>
      <Route path='/msg' element={<MsgPage/>}/>
      <Route path='/news' element={<NewsPage/>}/>

      <Route path='/loginpg' element={<LoginPage/>}/>
      <Route path='/userpg' element={<UserPage/>}/>

      <Route path='/join' element={<UserJoin/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/lost' element={<UserLost/>}/>
      <Route path='/userinfo' element={<UserInfo/>}/>
      <Route path='/unregis' element={<Unregister/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
