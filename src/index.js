import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home'
import NoPage from './NoPage'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="ContactUs" element={<ContactUs/>}/>
          <Route path="AboutUs" element={<AboutUs/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
