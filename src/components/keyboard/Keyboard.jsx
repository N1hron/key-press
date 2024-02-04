import Key from '../key/Key'

import './keyboard.scss'

export default function Keyboard() {

    return (
        <div className='keyboard'>
            <div className='keyboard__section'>
                <div className='keyboard__row'>
                    <Key code='Escape' main='Esc'/>
                    <div className='keyboard__blank'/>
                    <div className='function-keys'>
                        <div className='function-keys__group'>
                            <Key code='F1' main='F1'/>
                            <Key code='F2' main='F2'/>
                            <Key code='F3' main='F3'/>
                            <Key code='F4' main='F4'/>
                        </div>
                        <div className='function-keys__group'>
                            <Key code='F5' main='F5'/>
                            <Key code='F6' main='F6'/>
                            <Key code='F7' main='F7'/>
                            <Key code='F8' main='F8'/>
                        </div>
                        <div className='function-keys__group'>
                            <Key code='F9' main='F9'/>
                            <Key code='F10' main='F10'/>
                            <Key code='F11' main='F11'/>
                            <Key code='F12' main='F12'/>
                        </div>
                    </div>
                </div>
                <div className='keyboard__row'>
                    <Key code='Backquote' main='`' secondary='~'/>
                    <Key code='Digit1' main='1' secondary='!'/>
                    <Key code='Digit2' main='2' secondary='@'/>
                    <Key code='Digit3' main='3' secondary='#'/>
                    <Key code='Digit4' main='4' secondary='$'/>
                    <Key code='Digit5' main='5' secondary='%'/>
                    <Key code='Digit6' main='6' secondary='^'/>
                    <Key code='Digit7' main='7' secondary='&'/>
                    <Key code='Digit8' main='8' secondary='*'/>
                    <Key code='Digit9' main='9' secondary='('/>
                    <Key code='Digit0' main='0' secondary=')'/>
                    <Key code='Minus' main='-' secondary='_'/>
                    <Key code='Equal' main='=' secondary='+'/>
                    <Key code='Backspace' main='Backspace'/>
                </div>
                <div className='keyboard__row'>
                    <Key wide code='Tab' main='Tab'/>
                    <Key code='KeyQ' main='Q'/>
                    <Key code='KeyW' main='W'/>
                    <Key code='KeyE' main='E'/>
                    <Key code='KeyR' main='R'/>
                    <Key code='KeyT' main='T'/>
                    <Key code='KeyY' main='Y'/>
                    <Key code='KeyU' main='U'/>
                    <Key code='KeyI' main='I'/>
                    <Key code='KeyO' main='O'/>
                    <Key code='KeyP' main='P'/>
                    <Key code='BracketLeft' main='[' secondary='{'/>
                    <Key code='BracketRight' main=']' secondary='}'/>
                    <Key wide code='Backslash' main='|' secondary='\'/>
                </div>
                <div className='keyboard__row'>
                    <Key wide code='CapsLock' main='Caps'/>
                    <Key code='KeyA' main='A'/>
                    <Key code='KeyS' main='S'/>
                    <Key code='KeyD' main='D'/>
                    <Key code='KeyF' main='F'/>
                    <Key code='KeyG' main='G'/>
                    <Key code='KeyH' main='H'/>
                    <Key code='KeyJ' main='J'/>
                    <Key code='KeyK' main='K'/>
                    <Key code='KeyL' main='L'/>
                    <Key code='Semicolon' main=':' secondary=';'/>
                    <Key code='Quote' main='"' secondary={ '\'' }/>
                    <Key wide code='Enter' main='Enter'/>
                </div>
                <div className='keyboard__row'>
                    <Key wide code='ShiftLeft' main='Shift'/>
                    <Key code='KeyZ' main='Z'/>
                    <Key code='KeyX' main='X'/>
                    <Key code='KeyC' main='C'/>
                    <Key code='KeyV' main='V'/>
                    <Key code='KeyB' main='B'/>
                    <Key code='KeyN' main='N'/>
                    <Key code='KeyM' main='M'/>
                    <Key code='Comma' main='<' secondary=','/>
                    <Key code='Period' main='>' secondary='.'/>
                    <Key code='Slash' main='?' secondary='/'/>
                    <Key wide code='ShiftRight' main='Shift'/>
                </div>
                <div className='keyboard__row'>
                    <Key code='ControlLeft' main='Ctrl'/>
                    <Key centered code='MetaLeft' main='Meta'/>
                    <Key code='AltLeft' main='Alt'/>
                    <Key wide centered code='Space' main='Space'/>
                    <Key code='AltRight' main='Alt'/>
                    <Key centered code='ContextMenu' main='Context Menu'/>
                    <Key code='ControlRight' main='Ctrl'/>
                </div>
            </div>
            <div className='keyboard__section'>
                <div className='keyboard__row'>
                    <Key code='PrintScreen' main='Print Screen'/>
                    <Key centered code='ScrollLock' main='Scroll Lock'/>
                    <Key code='Pause' main='Pause Break'/>
                </div>
                <div className='keyboard__row'>
                    <Key code='Insert' main='Insert'/>
                    <Key code='Home' main='Home'/>
                    <Key code='PageUp' main='Page Up'/>
                </div>
                <div className='keyboard__row'>
                    <Key code='Delete' main='Delete'/>
                    <Key code='End' main='End'/>
                    <Key code='PageDown' main='Page Down'/>
                </div>
                <div className='keyboard__row'></div>
                <div className='keyboard__row'>
                    <div className='keyboard__blank'/>
                    <Key centered code='ArrowUp' main='&uarr;'/>
                    <div className='keyboard__blank'/>
                </div>
                <div className='keyboard__row'>
                    <Key code='ArrowLeft' main='&larr;'/>
                    <Key centered code='ArrowDown' main='&darr;'/>
                    <Key code='ArrowRight' main='&rarr;'/>
                </div>
            </div>
            <div className='keyboard__section'>
                <div className='keyboard__row'></div>
                <div className='keyboard__numpad'>
                    <Key code='NumLock' main='Num Lock'/>
                    <Key code='NumpadDivide' main='/'/>
                    <Key code='NumpadMultiply' main='*'/>
                    <Key code='NumpadSubtract' main='-'/>
                    <Key code='Numpad7' main='7' secondary='Home'/>
                    <Key code='Numpad8' main='8' secondary='&uarr;'/>
                    <Key code='Numpad9' main='9' secondary='PgUp'/>
                    <Key code='NumpadAdd' main='+'/>
                    <Key code='Numpad4' main='4' secondary='&larr;'/>
                    <Key code='Numpad5' main='5'/>
                    <Key code='Numpad6' main='6' secondary='&rarr;'/>
                    <Key code='Numpad1' main='1' secondary='End'/>
                    <Key code='Numpad2' main='2' secondary='&darr;'/>
                    <Key code='Numpad3' main='3' secondary='PgDn'/>
                    <Key code='NumpadEnter' main='Enter'/>
                    <Key code='Numpad0' main='0' secondary='Ins'/>
                    <Key code='NumpadDecimal' main='.' secondary='Del'/>
                </div>
            </div>
        </div>
    )
}