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
  const [viewed, timesViewed] = useState(card["viewed"]);
  const [wrong, timesWrong] = useState(card["wrong"]);
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
      <div className='card-side-content'>
        <div className='card-side-text'>
          {showSide(flip)}
        </div>
        <div className='card-side-buttons'>
          <input type={'button'} value='FLIP' onClick={() => setFlip(!flip)}/>
        </div>
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
  return (
    <div>
      <ShowCard front={front} back={back}/>
      <CardNavButtons/>
    </div>
  );
}

export default function DisplayCard(props: any) {  
  if (!props.show) {return null }
  return(
    <div className='card-side'>
      <div className='card-side-display'>
        <CardWrapper onClose={props.onClose}/>
      </div>
    </div>
    );
  }