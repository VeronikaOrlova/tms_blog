import React from 'react';

import { Button } from './components/Button'
import likeImage from './components/Icon/likeImage.svg'
import dislikeImage from './components/Icon/dislikeImage.svg'
import bookmarkImage from './components/Icon/bookmarkImage.svg'

import {InputForm} from './components/Input/Input'
import {Textarea} from './components/Textarea/Textarea'



function App() {
  return (
    <div className="App">
      <Button text='Primary' onClick={() => console.log('Text')}  className='primaryBtn' disabled={false}/>
      <Button text='Secondary' onClick={() => console.log('Text')}  className='secondaryBtn' disabled={false}/>
      <Button text='Secondary2' onClick={() => console.log('Text')}  className='secondary2Btn' disabled={false}/>
      <Button text='Button with icon' onClick={() => console.log('Text')}  className='iconBtn' disabled={false} icon={bookmarkImage}/>
      <Button text=''  onClick={() => console.log('Text')}  className='likeBtn' disabled={false} icon={likeImage}/> 
      <Button text='' onClick={() => console.log('Text')}  className='dislikeBtn' disabled={false} icon={dislikeImage}/>  

      <InputForm  placeholder='Enter your text'  type='text' className='input' disabled={false} label='Text'/>  
      <InputForm  placeholder='Enter your email'  type='email' className='input' disabled={false} label='Email'/>  
      <InputForm  placeholder='Enter your password' type='password' className='input' disabled={false} label='Password'/> 
      <Textarea className='textarea' name='textarea' placeholder='Your text here' cols={74} rows={10} label='Text'/>

    </div>
  );
}



export default App;