import { useEffect, useState, createContext } from 'react'

import PressedKeysContext from '../../contexts/pressedKeysContext.js'
import Keyboard from '../keyboard/Keyboard'
import LastKey from '../lastKey/LastKey'

import 'normalize.css'
import './App.scss'

export default function App() {
    const [pressedKeys, setPressedKeys] = useState([])

    useEffect(() => {
        window.addEventListener('contextmenu', event => event.preventDefault())
        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('keyup', onKeyUp)
        window.addEventListener('blur', () => setPressedKeys([]))

        console.log(navigator)
    }, [])

    function onKeyDown(event) {
        event.preventDefault()
        console.log(event.key)
        setPressedKeys(prev => prev.includes(event.code) ? prev : [...prev, { code: event.code, name: event.key }])
    }

    function onKeyUp(event) {
        event.preventDefault()
        setPressedKeys(prev => prev.filter(key => key.code !== event.code))
    }

    return (
        navigator.keyboard ||
        <div className='container'>
            <PressedKeysContext.Provider value={ pressedKeys }>
                <LastKey/>
                <Keyboard/>
            </PressedKeysContext.Provider>
        </div>
    )
}
