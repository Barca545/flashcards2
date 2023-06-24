import React, {useState, useRef, useEffect} from 'react';
import './card.css';
import { FlashcardDeck } from './card-types';
import { Deck } from './text-card';
import { Timer } from './timer-types';

function CardWrapper(){
  const deck:FlashcardDeck = Deck
  /** useAppSelector(deck) */
  /*use this to toggle between the cards in the deck (an array of car)
  starts at lastviewed value 
  (have a function that sets last viewed to zero if the entire deck was viewed) 
  */
  const [index,setIndex] = useState(0)
  const card = deck.cards[index]
  const [viewed, setViewed] = useState(card.viewed)
  const [wrong, setWrong] = useState(card.wrong)
  const [right, setRight] = useState(card.right)
  const [flag, setFlag] = useState(card.flagged)
  
  const [flip, setFlip] = useState(false);
  
  function ShowCard(){
    const showSide = (flipped:boolean) => {
      if (flipped === true){
        return card.back
      }
      else {
        return card.front
      }
    }
    return(
      <div className='card-side-content' onClick={() => setFlip(!flip)}>
        {showSide(flip)}
      </div>
    );
  }
  function CardNavButtons(){   
    ///need to add code to the isRight/isWrong so they can only be used once per view
    
    const isRight = () => {
      if (index+1>Deck.cards.length-1) {
        setIndex(index)
      }
      else{
        setIndex(index+1)
        setViewed(viewed+1)
        setRight(right+1)
        ///need another line dispatching the updated card information to the store
      }
    }

    const isWrong = () => {
      if (index+1>Deck.cards.length-1) {
        setIndex(index)
      }
      else{
        setIndex(index+1)
        setViewed(viewed+1)
        setWrong(wrong+1)
        ///need another line dispatching the updated card information to the store
      }
    }
    
    const goBack = () => {
      ///unsure if this should also remove the viewed and right/wrong markers
      if (index<=0) {
        setIndex(index)
      }
      else{setIndex(index-1)}
    }

    /*finish needs to 
    -save the state of the deck to the db
    -route back to the choose flashcard page
    */

    return (
      <div className='nav-buttons'>
        <input type={'button'} value='BACK' onClick={()=>goBack()}/>
        <input type={'button'} value='RIGHT' onClick={()=>isRight()}/>
        <input type={'button'} value='WRONG'onClick={()=>isWrong()}/>
        <input type={'button'} value='FLAG CARD' onClick={()=>setFlag(!flag)}/>
        <input type={'button'} value='FINISH'/>
      </div>
      );}
  
  function Timer({minutes=0,seconds=0}:Timer){
    const [time, setTime] = useState<Timer>({minutes,seconds})

    ///const reset = () => setTime({minutes: time.minutes, seconds: time.seconds});

    const tick = () => {
      if (time.minutes === 0 && time.seconds === 0) {
        setTime({minutes: 0, seconds: 0})
        /*this should also flip the card and only reset when a new card is pulled
        easiest way to do this is nest this so the component rerenders when the card rerenders
        currently the flag card causes it to rerender
        */ 
      }
      else if (time.seconds===0) {
        setTime({minutes: time.minutes-1, seconds: 59})
      }
      else {
        setTime({minutes: time.minutes, seconds: time.seconds-1})
      }
    }

    React.useEffect(() => {
      const timerId = setInterval(() => tick(), 1000);
      ///what does clear/set Interval do
      return () => clearInterval(timerId)
    })
    return (
      <div>
        <p>{`${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p> 
      </div>
  )}

  /*make the timer get set according to a dropdown the select from before they start review*/
  /**need the option to shuffle the cards to be a button you toggle above the card */
  return (
    <div className='card-wrapper'>
      <span className='card-holder'><ShowCard/></span>
      <span className='nav-holder'><CardNavButtons/></span>
      <span className='timer'>
        <Timer  minutes={1} seconds={0}/>
      </span>
    </div>
  );
}

export default function PracticeCard(){
  return(
    <CardWrapper/>
    )
  }