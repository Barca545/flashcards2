import React, {useState} from 'react';
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
  
  /// something with useRef https://www.w3schools.com/react/react_useref.asp
  function CardTimer(props:any){
    const [time,setTime]= useState(props.start)
    setInterval(() => {
      if (time>0){setTime(time-1)}
    },1000)
    return(
      <div className='timer'>
        <span id='seconds'>
          {time}
        </span>
      </div>
    )
  }
  
  return (
    <div className='card-wrapper'>
      <span className='card-holder'><ShowCard front={front} back={back}/></span>
      <span className='nav-holder'><CardNavButtons/></span>
      <span className='widgets'>
        <FlagBox/>
        <CardTimer start={10}/>
      </span>
    </div>
  );
}



export default function PracticeCard(props:any){
  return(
    <CardWrapper/>
    )

  }