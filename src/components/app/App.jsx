import { useEffect, useState } from 'react'

import PressedKeysInfoContext from '../../contexts/PressedKeysInfoContext.js'
import Keyboard from '../keyboard/Keyboard'
import PressedKeysHistory from '../pressedKeysHistory/PressedKeysHistory.jsx'
import LastKey from '../lastKey/LastKey'

import 'normalize.css'
import './app.scss'

export default function App() {
    const [pressedKeysInfo, setPressedKeysInfo] = useState({
        current: [],
        last: null
    })

    useEffect(() => {
        window.addEventListener('contextmenu', event => event.preventDefault())
        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('keyup', onKeyUp)
        window.addEventListener('blur', () => setPressedKeysInfo(prev => ({ ...prev, current: [] })))
    }, [])

    function onKeyDown(event) {
        event.preventDefault()

        if (!event.repeat) {
            setPressedKeysInfo(prev => ({
                current: prev.current.includes(event.code) ? prev.current : [...prev.current, { code: event.code, name: event.key }],
                last: { code: event.code, name: event.key }
            }))
        }
    }

    function onKeyUp(event) {
        event.preventDefault()

        const { key, code } = event

        setPressedKeysInfo(prev => ({
            last: key === 'PrintScreen' ? { code, name: key } : prev.last,
            current: prev.current.filter(key => key.code !== code)
        }))
    }
    
    return (
        <PressedKeysInfoContext.Provider value={ pressedKeysInfo }>
            <PressedKeysHistory/>
            <div className='main-content'>
                <LastKey/>
                <div className='keyboard-container'>
                    <Keyboard/>
                </div>
            </div>
        </PressedKeysInfoContext.Provider>
    )
}
