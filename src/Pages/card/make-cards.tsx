import React, {useState} from 'react';

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