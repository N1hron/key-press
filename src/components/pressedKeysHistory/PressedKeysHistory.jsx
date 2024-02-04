import { useContext, useState, useEffect, useRef, useMemo } from 'react'

import PressedKeysContext from '../../contexts/PressedKeysContext'

import './pressedKeysHistory.scss'

export default function PressedKeysHistory() {
    const pressedKeysInfo = useContext(PressedKeysContext)
    const pressedKeysListRef = useRef(null)

    const [pressedKeysHistory, setPressedKeysHistory] = useState([])
    
    useEffect(() => {
        if (pressedKeysInfo.last) {
            setPressedKeysHistory(prev => [pressedKeysInfo.last, ...prev])
        }
    }, [pressedKeysInfo.last])

    useEffect(() => {
        const ul = pressedKeysListRef.current
        
        if (ul.scrollWidth > ul.offsetWidth) {
            setPressedKeysHistory(prev => {
                const prevCopy = [...prev]
                prevCopy.pop()
                
                return prevCopy
            })
        }
    }, [pressedKeysHistory])

    const pressedKeysHistoryElements = useMemo(() => {
        return pressedKeysHistory.map((key, i) => {
            return (
                <li 
                    style={ i === 0 ? { 
                        backgroundColor: getRandomHsl(), 
                        color: '#000000' 
                    } : null }
                    key={ i }
                >
                    { key.name === ' ' ? 'Space' : key.name }
                </li>
            )
        })
    }, [pressedKeysHistory])
    
    return (
        <div className='pressed-keys'>
            <ul ref={ pressedKeysListRef }>
                { pressedKeysHistoryElements }
            </ul>
        </div>
    )
}

function getRandomHsl() {
    const hue = Math.floor(Math.random() * 360) // 0 - 359
    
    return `hsl(${hue}, 100%, 75%)`
}

