import React, {useState} from 'react';

class Flashcard {
    Front: string;
    Back: string;
    TimesStudied: number;
    TimesWrong: number;
    
    constructor (Front: string, Back:string) {
      this.Front = Front;
      this.Back = Back;
      this.TimesStudied = 0;
      this.TimesWrong = 0;
    }
  }

export default function MakeFlashcard(props:any) {
  if (!props.show) {return null }
  return (
    <div className='make-card'>
      <form>
        <input type='text' id = 'front' placeholder='Front'/>
        <input type='text' id = 'back' placeholder='Back'/>
        <input type={'submit'} value={'DONE'}/>
      </form>
    </div>
    );
  }  