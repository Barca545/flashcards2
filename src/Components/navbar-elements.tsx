import React, {useState } from 'react';

export function NavDropdown({category,pages}:any){
  const [showMenu, setShowMenu] = useState(false)

  function DropdownContent(pages:any){
    for (const [name, link] of Object.entries(pages)) {
      return (
            <li className='dropdown-menu'>
              <a href={`${link}`}>
                <div className='nav-item'>{`${name}`}</div>
              </a>
            </li>)}}
  return (
    <ul 
      className='dropdown-container'
      onMouseEnter={() => {setShowMenu(true); console.log(pages)}}>
      <div>
        {category}
      </div>
        {showMenu && <DropdownContent page={pages}/>}     
    </ul>
)}  

export function NavButton(page:any){
  return (
    <div className='dropdown-menu'>
      <a href={`${page.link}`}>
        <div className='nav-item'>{`${page.name}`}</div>
      </a>
    </div>)}
