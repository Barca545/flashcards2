import React, {useState} from 'react';
import './App.css';
import PracticeCard from './Pages/card/practice-cards';
import NavBar from './Components/navbar'

  export default function App() {
    return(
    <div className='App'>
      <NavBar/>
      <PracticeCard/> 
    </div>
  );
}
