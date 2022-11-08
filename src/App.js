import React from 'react';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import Appp from './App.css'


const App = () => {
  const [text, settext] = useState('');

  const {speak}= useSpeechSynthesis()

  const clickHandler=(e)=>{
    speak({text:text})
  }
  const changeHandler=(e)=>{
    settext(e.target.value)
  }
  
  return (
    <>
      <div className='text'>
       <h1 className='h1'>Text to Speech</h1>
      </div >

      <div className='tarea'>
        <textarea onChange={changeHandler} rows='20' cols='100' ></textarea>
      </div>
        

      
     <button className='buton' onClick={()=>{ clickHandler()}}>Click to speak</button>
    </>
  );
}

export default App;
