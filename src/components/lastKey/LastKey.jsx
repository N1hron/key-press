import { useContext } from 'react'
import { motion } from 'framer-motion'

import PressedKeysContext from '../../contexts/PressedKeysContext'

import './lastKey.scss'

export default function LastKey() {
    const pressedKeysInfo = useContext(PressedKeysContext)

    if (!pressedKeysInfo.last) return <div className='last-key'><p>Press key</p></div>

    const { name, code } = pressedKeysInfo.last
    return (
        <motion.div 
            className='last-key'
            initial={{ opacity: 0, transform: 'translateY(25%)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            key={ code }
        >
            <p>{ name === ' ' ? 'Space' : name }</p>
        </motion.div>
    )
}