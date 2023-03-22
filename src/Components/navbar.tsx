import React from 'react';
import { NavButton, NavDropdown } from './navbar-elements';
import './nav-elements.css'

const cardpages = {
  'Make Cards': './Pages/video-notes',
  'Practice Cards': './Pages/practice-cards'
};

const videopage = {name:'Make Cards', link: './Pages/video-notes'}


export default function NavBar(){
  return(
    <div className='nav-bar'>
      <span className='nav-button'><NavDropdown category='Cards' pages={cardpages}/></span>
      <span className='nav-button'><NavButton page={videopage}/></span>
    </div>
  );
}
