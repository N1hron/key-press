import { createContext } from 'react'

const PressedKeysInfoContext = createContext({
    current: [],
    last: null
})

export default PressedKeysInfoContext