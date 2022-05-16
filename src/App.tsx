import React from 'react';
import logo from './logo.svg';
import './App.css';
import { setTheme } from './redux/reducers/theme'
import { useAppDispatch, useAppSelector } from './redux/hooks'


function App() {
  const theme = useAppSelector(state => state.theme.value)
  const dispatch = useAppDispatch()

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(newTheme))
  }

  return (
    <div className={`App theme--${theme}`}>
      <button text="Primary" className="primary" onClick={toggleTheme} />
    </div>
  )
}

export default App;
