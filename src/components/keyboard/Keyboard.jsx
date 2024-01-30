import { useEffect } from 'react'

import Key from '../key/Key'
import './keyboard.scss'

export default function Keyboard() {
    useEffect(() => console.log('render!'))

    return (
        <div className='keyboard'>
            <div className='keyboard__section'>
                <div className='keyboard__row'>
                    <Key keyCode='Escape' main='Esc'/>
                    <div className='keyboard__blank'/>
                    <div className='function-keys'>
                        <div className='function-keys__group'>
                            <Key keyCode='F1' main='F1'/>
                            <Key keyCode='F2' main='F2'/>
                            <Key keyCode='F3' main='F3'/>
                            <Key keyCode='F4' main='F4'/>
                        </div>
                        <div className='function-keys__group'>
                            <Key keyCode='F5' main='F5'/>
                            <Key keyCode='F6' main='F6'/>
                            <Key keyCode='F7' main='F7'/>
                            <Key keyCode='F8' main='F8'/>
                        </div>
                        <div className='function-keys__group'>
                            <Key keyCode='F9' main='F9'/>
                            <Key keyCode='F10' main='F10'/>
                            <Key keyCode='F11' main='F11'/>
                            <Key keyCode='F12' main='F12'/>
                        </div>
                    </div>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='Backquote' main='`' secondary='~'/>
                    <Key keyCode='Digit1' main='1' secondary='!'/>
                    <Key keyCode='Digit2' main='2' secondary='@'/>
                    <Key keyCode='Digit3' main='3' secondary='#'/>
                    <Key keyCode='Digit4' main='4' secondary='$'/>
                    <Key keyCode='Digit5' main='5' secondary='%'/>
                    <Key keyCode='Digit6' main='6' secondary='^'/>
                    <Key keyCode='Digit7' main='7' secondary='&'/>
                    <Key keyCode='Digit8' main='8' secondary='*'/>
                    <Key keyCode='Digit9' main='9' secondary='('/>
                    <Key keyCode='Digit0' main='0' secondary=')'/>
                    <Key keyCode='Minus' main='-' secondary='_'/>
                    <Key keyCode='Equal' main='=' secondary='+'/>
                    <Key keyCode='Backspace' main='Backspace'/>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='Tab' wide main='Tab'/>
                    <Key keyCode='KeyQ' main='Q'/>
                    <Key keyCode='KeyW' main='W'/>
                    <Key keyCode='KeyE' main='E'/>
                    <Key keyCode='KeyR' main='R'/>
                    <Key keyCode='KeyT' main='T'/>
                    <Key keyCode='KeyY' main='Y'/>
                    <Key keyCode='KeyU' main='U'/>
                    <Key keyCode='KeyI' main='I'/>
                    <Key keyCode='KeyO' main='O'/>
                    <Key keyCode='KeyP' main='P'/>
                    <Key keyCode='BracketLeft' main='[' secondary='{'/>
                    <Key keyCode='BracketRight' main=']' secondary='}'/>
                    <Key keyCode='Backslash' wide main='|' secondary='\'/>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='CapsLock' wide main='Caps'/>
                    <Key keyCode='KeyA' main='A'/>
                    <Key keyCode='KeyS' main='S'/>
                    <Key keyCode='KeyD' main='D'/>
                    <Key keyCode='KeyF' main='F'/>
                    <Key keyCode='KeyG' main='G'/>
                    <Key keyCode='KeyH' main='H'/>
                    <Key keyCode='KeyJ' main='J'/>
                    <Key keyCode='KeyK' main='K'/>
                    <Key keyCode='KeyL' main='L'/>
                    <Key keyCode='Semicolon' main=':' secondary=';'/>
                    <Key keyCode='Quote' main='"' secondary={ '\'' }/>
                    <Key keyCode='Enter' wide main='Enter'/>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='ShiftLeft' wide main='Shift'/>
                    <Key keyCode='KeyZ' main='Z'/>
                    <Key keyCode='KeyX' main='X'/>
                    <Key keyCode='KeyC' main='C'/>
                    <Key keyCode='KeyV' main='V'/>
                    <Key keyCode='KeyB' main='B'/>
                    <Key keyCode='KeyN' main='N'/>
                    <Key keyCode='KeyM' main='M'/>
                    <Key keyCode='Comma' main='<' secondary=','/>
                    <Key keyCode='Period' main='>' secondary='.'/>
                    <Key keyCode='Slash' main='?' secondary='/'/>
                    <Key keyCode='ShiftRight' wide main='Shift'/>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='ControlLeft' main='Ctrl'/>
                    <Key keyCode='MetaLeft' centered main='Meta'/>
                    <Key keyCode='AltLeft' main='Alt'/>
                    <Key keyCode='Space' wide centered main='Space'/>
                    <Key keyCode='AltRight' main='Alt'/>
                    <Key keyCode='ControlRight' main='Ctrl'/>
                </div>
            </div>
            <div className='keyboard__section'>
                <div className='keyboard__row'>
                    <Key keyCode='' main='Print Screen'/> {/* Figure This Out!!! */}
                    <Key keyCode='ScrollLock' centered main='Scroll Lock'/>
                    <Key keyCode='Pause' main='Pause Break'/>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='Insert' main='Insert'/>
                    <Key keyCode='Home' main='Home'/>
                    <Key keyCode='PageUp' main='Page Up'/>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='Delete' main='Delete'/>
                    <Key keyCode='End' main='End'/>
                    <Key keyCode='PageDown' main='Page Down'/>
                </div>
                <div className='keyboard__row'></div>
                <div className='keyboard__row'>
                    <div className='keyboard__blank'/>
                    <Key keyCode='ArrowUp' centered main='&uarr;'/>
                    <div className='keyboard__blank'/>
                </div>
                <div className='keyboard__row'>
                    <Key keyCode='ArrowLeft' main='&larr;'/>
                    <Key keyCode='ArrowDown' centered main='&darr;'/>
                    <Key keyCode='ArrowRight' main='&rarr;'/>
                </div>
            </div>
        </div>
    )
}