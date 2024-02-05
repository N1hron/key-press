import { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'

import PressedKeysContext from '../../contexts/PressedKeysContext'
import getImgForKey from '../../utils/getImgForKey'

import './pressedKeysHistory.scss'

export default function PressedKeysHistory() {
    const pressedKeysInfo = useContext(PressedKeysContext)
    const pressedKeysListRef = useRef(null)

    const [pressedKeysHistory, setPressedKeysHistory] = useState([])
    
    useEffect(() => {
        if (pressedKeysInfo.last) {
            setPressedKeysHistory(prev => [...prev, pressedKeysInfo.last, ])
        }
    }, [pressedKeysInfo.last])

    useEffect(() => {
        const ul = pressedKeysListRef.current
        
        if (ul.scrollWidth > ul.offsetWidth) {
            setPressedKeysHistory(prev => {
                const prevCopy = [...prev]
                prevCopy.shift()
                
                return prevCopy
            })
        }
    }, [pressedKeysHistory])

    const pressedKeysHistoryElements = useMemo(() => {
        return pressedKeysHistory.map((key, i) => {
            const isLast = i === pressedKeysHistory.length - 1

            return (
                <motion.li
                    initial={{ opacity: 0, transform: 'scale(.8)' }}
                    animate={{ opacity: 1, transform: 'scale(1)' }}
                    transition={{ duration: 0.2 }}
                    className={ isLast ? 'last' : ''}
                    style={ isLast ? { backgroundColor: key.hsl } : null }
                    key={ key.uuid }
                >
                    { key.name === ' ' ? 'Space' : getImgForKey(key.name) }
                </motion.li>
            )
        })
    }, [pressedKeysHistory])
    
    return (
        <div className='pressed-keys'>
            <ul ref={ pressedKeysListRef }>
                { pressedKeysHistoryElements.reverse() }
            </ul>
        </div>
    )
}

