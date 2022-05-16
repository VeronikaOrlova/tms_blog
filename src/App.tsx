import React from 'react';

import { Button } from './components/Button'
import likeIcon from './components/Icon/likeIcon.svg'
import dislikeIcon from './components/Icon/dislikeIcon.svg'
import bookmarkIcon from './components/Icon/bookmarkIcon.svg'


function App() {
  return (
    <div className="App">
      <Button text='Primary' onClick={() => console.log('Text')}  className='primaryBtn' disabled={false}/>
      <Button text='Secondary' onClick={() => console.log('Text')}  className='secondaryBtn' disabled={false}/>
      <Button text='Secondary2' onClick={() => console.log('Text')}  className='secondary2Btn' disabled={false}/>
      <Button text='Button with icon' onClick={() => console.log('Text')}  className='iconBtn' disabled={false} icon={bookmarkIcon}/>
      <Button text=''  onClick={() => console.log('Text')}  className='likeBtn' disabled={false} icon={likeIcon}/> 
      <Button text='' onClick={() => console.log('Text')}  className='dislikeBtn' disabled={false} icon={dislikeIcon}/>
    </div>
  );
}

export default App;
