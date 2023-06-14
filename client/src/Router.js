import React from 'react';
import Singin from './components/Sign-Register/Signin.js';
import LandingPage from './components/Home-Myvidoes/Landingpage.js';
import Register from './components/Sign-Register/Register.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myvideos from './components/Home-Myvidoes/Myvideos.js';
import Search from './components/Upload-Search-Streaming/Search.js';


function Router() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign" element={<Singin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myvideos" element={<Myvideos />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  </>);

}
export default Router;