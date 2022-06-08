import React, { FC, useEffect, useState } from 'react'
import './index.css'

interface IModal {
    state: boolean
    setState: () => void
}

const Modal: FC<IModal> = (props: IModal) => {
    const {state, setState } = props
    const [timer, setTimer] = useState<number>(5)

    useEffect(()=> {
        if(state) {
            const value = timer - 1
            const counter = setTimeout(() => {
                if(value > 0) setTimer(value)
            },1000)
            if (value <= 0 ) {
                clearInterval(counter)
                setTimer(0)
            }
        }
        if(!state) setTimer(5)
    }, [timer, state])

    const handleState = () => setState()

    const handleAccept = () => {
        handleState()
        setTimeout(() => {
            const newModal = localStorage.getItem('newModal') ?? 'true'
            if(newModal === 'true') {
                alert('Действие выполнено')
                localStorage.setItem('newModal', 'false')
            }
        }, 0);
    }

    return (
        <div className={state === true ? 'modal active': 'modal'} onClick={handleState}>
            <div className='modal__content' onClick={e=>e.stopPropagation()}>
                <div className='modal__x' onClick={handleState}>X</div>
                <h2>Согласие с правилами</h2>
                <p>
                Для данной функции применяются особые условия и правила пользования, их необходимо подтвердить, нажав на кнопку Подтвердить»
                </p>
            <div className='modal__buttons'>
                <button onClick={handleState}>Отмена</button>
                <button 
                    onClick={handleAccept} 
                    disabled={timer === 0 ? false : true}
                >
                    Подтвердить {timer === 0 ? '' : `(${timer})`}
                </button>
            </div>
            </div>
        </div>
    )
}

export default Modal