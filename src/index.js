import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Services from './Services'
import DiscoverMore from "./DiscoverMore";
import SocialMedia from "./SocialMedia";
import GetInTouch from "./GetInTouch";
import Video from "./Video"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
        <Video />
      <Services />
      <DiscoverMore />
      <SocialMedia />
      <GetInTouch />
  </React.StrictMode>
);
