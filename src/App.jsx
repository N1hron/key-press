import { useEffect, useState, createContext } from 'react'

import Keyboard from './components/keyboard/Keyboard'
import 'normalize.css'
import './App.scss'

export const PressedKeysContext = createContext([])

function App() {
  const [pressedKeys, setPressedKeys] = useState([])

  useEffect(() => console.log('changed!'), [pressedKeys])

  useEffect(() => {
    window.addEventListener('contextmenu', event => event.preventDefault())

    window.addEventListener('keydown', event => {
      event.preventDefault()
      setPressedKeys(prev => prev.includes(event.code) ? prev : [...prev, event.code])
    })

    window.addEventListener('keyup', event => {
      event.preventDefault()
      setPressedKeys(prev => prev.filter(key => key !== event.code))
    })
  }, [])

  return (
    <PressedKeysContext.Provider value={ pressedKeys }>
      <div className='container'>
        <Keyboard/>
      </div>
    </PressedKeysContext.Provider>
  )
}

export default App
