import React, {useState, useRef, useEffect} from 'react';
import './card.css';
import * as deck from'./text-card.json';

const cards: {[index:string]: any} = deck

function CardWrapper(props:any){
  const [currentid, changeId] = useState(0);
  var ids = Object.keys(cards)
  var id = ids[currentid]
  var card = cards[id]
  var front = card['front']
  var back = card["back"]
  var flagged = card["flagged"]
  const [viewed, timesViewed] = useState(card["viewed"]);
  const [wrong, timesWrong] = useState(card["wrong"]);
  const [flag, flager] = useState(flagged)
  function ShowCard(props:any){
    const [flip, setFlip] = useState(false);
    const showSide = (flipped:boolean) => {
      if (flipped === true){
        return props.back
      }
      else {
        return props.front
      }
    }
    return(
      <div className='card-side-content' onClick={() => setFlip(!flip)}>
        {showSide(flip)}
      </div>
    );
  }
  function CardNavButtons(){
    function setId(change:number){
      if (currentid+change > (ids.length-2) || currentid+change < 0) 
        {return (changeId(ids.length-2))}
      else {return (changeId(currentid+change))}
    }
    function answerValue(right:boolean){
      timesViewed(viewed+1)
      if (!right) {timesWrong(wrong+1)
        setId(1)}
      else{
        setId(1)
      }}
    return (
      <div className='nav-buttons'>
        <input type={'button'} value='BACK' onClick={()=>setId(-1)}/>
        <input type={'button'} value='RIGHT' onClick={()=>answerValue(true)}/>
        <input type={'button'} value='WRONG' onClick={()=>answerValue(false)}/>
        <input type={'button'} value='SHUFFLE'/> 
        <input type={'button'} value='FINISH' onClick={props.onClose}/>
      </div>
      );}
  
  function FlagBox(props:any){
    return(
      <div>
        <input type={'button'} value='FLAG CARD' onClick={()=>flager(!flagged)}/>
      </div>
    )
  }
  
  function CardTimer(props:any){
    const [startTime, setStart] = useState(0)
    const [now, setNow] = useState(0)
    const timeRef = useRef(0)
    
    let secondsPassed = 0
    if (startTime != 0 && now != 0) {
      secondsPassed = (now-startTime) / 1000;
    }
    
    let timeRemaining = props.start
    
    if (secondsPassed<props.start) 
    {timeRemaining = props.start-secondsPassed}
    else{timeRemaining=0}

    const start = () => {
      setStart(Date.now())
      clearInterval(timeRef.current)
      timeRef.current = window.setInterval(() => {setNow(Date.now())},1000) ///IDK why TS dislikes this added window but I think this is bad
    }
    
    return(
      <div className='timer'>
        <input type="button" value={'Start'} onClick={start}/>
        <div className='timer-display'>
          {timeRemaining.toFixed(0).padStart(2, '0')}
        </div>
      </div>
    )
  }
  
  return (
    <div className='card-wrapper'>
      <span className='card-holder'><ShowCard front={front} back={back}/></span>
      <span className='nav-holder'><CardNavButtons/></span>
      <span className='widgets'>
        <FlagBox/>
        <CardTimer start={30}/>
      </span>
    </div>
  );
}

export default function PracticeCard(){
  return(
    <CardWrapper/>
    )
  }