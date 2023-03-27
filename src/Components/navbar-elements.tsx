import React, {useState } from 'react';

export function NavDropdown(props:any){
  return(
    <div className='dropdown-container'>
      <h2>FLASHCARDS</h2>
      <div className='dropdown-menu'>
        {props.pages?.map((pages:any) =>
          <div className='dropdown-menu-box'>
            <a href={`${pages.link}`}>
              {`${pages.name}`}
            </a>
          </div>)}
      </div>
    </div>
  )
}

export function NavButton(props:any){
  return (
      props.page?.map((page:any) => 
      <div className='nav-button'>
        <a href={`${page.link}`}>
          {`${page.name}`}
        </a>
      </div>
      )
  )
}