import { useMemo, useContext, useState } from 'react'

import PressedKeysContext from '../../contexts/PressedKeysInfoContext'

import winIcon from '../../assets/images/windows-icon.svg'
import './key.scss'

export default function Key({ main, secondary, centered, wide, code }) {
    const pressedKeys = useContext(PressedKeysContext)

    const [wasPressed, setWasPressed] = useState(false)

    const className = useMemo(() => {
        let className = 'key'

        if (centered) className += ' key_centered'
        if (wide) className += ' key_wide'
        if (main.length > 2) className += ' key_small-text'
        if (keyPressed()) className += ' key_pressed'
        if (wasPressed) className +=' key_was-pressed'

        if (pressedKeys?.last?.code === code && !wasPressed) setWasPressed(true)
        

        return className
    }, [pressedKeys, wasPressed])

    function keyPressed() {
        return pressedKeys.current.find(key => key.code === code)
    }

    return (
        <div className={ className }>
            <p className='key__label key__label_main'>
                { main === 'Meta' ? <img src={ winIcon } alt='Windows' /> : main}
            </p>
            {
                secondary &&
                <p className='key__label key__label_secondary'>
                    { secondary }
                </p>
            }
        </div>
    )
}