import { useContext, useState, useEffect, useRef, useMemo } from 'react'

import PressedKeysContext from '../../contexts/PressedKeysContext'
import getRandomHsl from '../../utils/getRandomHsl'
import getImgForKey from '../../utils/getImgForKey'

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
                    className={ i === 0 ? 'first' : ''}
                    style={ i === 0 ? { backgroundColor: getRandomHsl() } : null }
                    key={ i }
                >
                    { key.name === ' ' ? 'Space' : getImgForKey(key.name) }
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

