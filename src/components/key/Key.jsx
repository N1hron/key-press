import { useMemo, useContext, useEffect } from 'react'

import { PressedKeysContext } from '../../App'
import './key.scss'

export default function Key({ main, secondary, centered, wide, keyCode }) {
    const pressedKeys = useContext(PressedKeysContext)

    const className = useMemo(() => {
        let className = 'key'

        if (centered) className += ' key_centered'
        if (wide) className += ' key_wide'
        if (main.length > 2) className += ' key_small-text'
        if (pressedKeys.includes(keyCode)) className += ' key_pressed'

        return className
    }, [pressedKeys])

    return (
        <div className={ className }>
            <p className='key__label key__label_main'>
                { main }
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