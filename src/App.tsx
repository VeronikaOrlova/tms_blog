import React from 'react';

import { Button } from './components/Button'
import likeImage from './components/Icon/likeImage.svg'
import dislikeImage from './components/Icon/dislikeImage.svg'
import bookmarkImage from './components/Icon/bookmarkImage.svg'


function App() {
  return (
    <div className="App">
      <Button text='Primary' onClick={() => console.log('Text')}  className='primaryBtn' disabled={false}/>
      <Button text='Secondary' onClick={() => console.log('Text')}  className='secondaryBtn' disabled={false}/>
      <Button text='Secondary2' onClick={() => console.log('Text')}  className='secondary2Btn' disabled={false}/>
      <Button text='Button with icon' onClick={() => console.log('Text')}  className='iconBtn' disabled={false} icon={bookmarkImage}/>
      <Button text=''  onClick={() => console.log('Text')}  className='likeBtn' disabled={false} icon={likeImage}/> 
      <Button text='' onClick={() => console.log('Text')}  className='dislikeBtn' disabled={false} icon={dislikeImage}/>
    </div>
  );
}

export default App;
