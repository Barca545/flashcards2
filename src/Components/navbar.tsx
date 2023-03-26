import React from 'react';
import {NavDropdown, NavButton} from './navbar-elements';
import './nav-elements.css'

const cardpages =[ 
  {name:'Make Cards', link: './Pages/video-notes'},
  {name:'Practice Cards', link: './Pages/practice-cards'}
];

const videopage = [{name:'Make Cards', link: './Pages/video-notes'}]

export default function NavBar(){
  return(
    <div className='nav-bar'>
      <div className='nav-element'><NavDropdown pages={cardpages}/></div>
      <div className='nav-element'><NavButton page={videopage}/></div>
    </div>
  );
}
