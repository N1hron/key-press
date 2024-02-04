import winIcon from '../assets/images/windows-icon.svg'
import contextMenuIcon from '../assets/images/context-menu-icon.svg'

export default function getImgForKey(key) {
    if (typeof key === 'string') {
       switch (key) {
        case 'Meta':
            return <img src={ winIcon } alt='Windows' />
        case 'Context Menu':
        case 'ContextMenu':
            return <img src={ contextMenuIcon } alt='Context Menu' />
        default:
            return key
        } 
    } else {
        throw new Error('Argument must be a string')
    }
}