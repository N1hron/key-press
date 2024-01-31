import { useContext, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import PressedKeysContext from '../../contexts/pressedKeysContext'

import './lastKey.scss'

export default function LastKey() {
    let [lastPressedKey, setLastPressedKey] = useState({code: null, name: 'Press Key'})

    const pressedKeys = useContext(PressedKeysContext)
    const lastKeyRef = useRef(null)

    useEffect(() => {
        if (pressedKeys.at(-1)) setLastPressedKey(pressedKeys.at(-1))
    }, [pressedKeys])

    return (
        <motion.div 
            className='last-key'
            initial={{ opacity: 0, transform: 'translateX(25%)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            key={ lastPressedKey.code }
        >
            <p>{ lastPressedKey.name === ' ' ? 'Space' : lastPressedKey.name }</p>
        </motion.div>
    )
}