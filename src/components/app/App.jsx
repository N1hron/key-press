import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import PressedKeysContext from '../../contexts/PressedKeysContext.js'
import Keyboard from '../keyboard/Keyboard'
import PressedKeysHistory from '../pressedKeysHistory/PressedKeysHistory.jsx'
import LastKey from '../lastKey/LastKey'
import getRandomHsl from '../../utils/getRandomHsl.js'

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

        const { key, code } = event

        if (!event.repeat) {
            setPressedKeysInfo(prev => ({
                current: prev.current.includes(code) ? prev.current : [...prev.current, { code, name: key }],
                last: { code, name: key, uuid: uuidv4(), hsl: getRandomHsl() }
            }))
        }
    }

    function onKeyUp(event) {
        event.preventDefault()
        
        const { key, code } = event

        setPressedKeysInfo(prev => ({
            current: prev.current.filter(key => key.code !== code),
            last: (
                (key === 'PrintScreen' || key === 'ContextMenu') ? { code, name: key, uuid: uuidv4(), hsl: getRandomHsl() } : prev.last
            )
        }))
    }
    
    return (
        <>
            <main>
                <PressedKeysContext.Provider value={ pressedKeysInfo }>
                    <PressedKeysHistory/>
                    <div className='main-content'>
                        <LastKey/>
                        <div className='keyboard-container'>
                            <Keyboard/>
                        </div>
                    </div>
                </PressedKeysContext.Provider>
            </main>
            <footer className='main-footer'>
                Made by&nbsp;
                <a 
                    href='https://github.com/N1hron' 
                    target='blank' 
                    style={{ 
                        color: pressedKeysInfo.last?.hsl || '#FFFFFF'
                    }}
                >N1hron</a>
            </footer>
        </>
    )
}
