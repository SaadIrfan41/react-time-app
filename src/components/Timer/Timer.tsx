import React, { useState } from 'react'
import { TimerButton } from '../TimerButton/TimerButton'

const Timer = () => {
  let [access, setAccess] = useState<any>()
  let [disable, setDisable] = useState(false)
  let [sec, setsec] = useState(0)
  let [minutes, setminutes] = useState(0)

  const startTimer = () => {
    setAccess(
      setInterval(() => {
        if (sec < 59) {
          sec += 1
          setsec(sec)
        } else {
          minutes += 1
          setsec(0)
          setminutes(minutes)
        }
      }, 1000)
    )
    setDisable(true)
  }

  const stopTimer = () => {
    setAccess(clearInterval(access))
    setDisable(false)
  }

  const resetTimer = () => {
    stopTimer()
    setminutes(0)
    setsec(0)
    console.log('Resetting timer.')
  }

  return (
    <div className='flex flex-col font-extrabold text-3xl w-1/3 text-center justify-center border-4 border-light-blue-500 border-opacity-100 h-48'>
      <div className=''>
        {minutes < 10 ? `0${minutes}` : minutes} : {sec < 10 ? `0${sec}` : sec}
      </div>
      <div className='flex  justify-evenly'>
        <TimerButton
          buttonAction={startTimer}
          buttonValue={'Start'}
          disable={disable}
        />
        <TimerButton
          buttonAction={stopTimer}
          buttonValue={'Stop'}
          disable={disable}
        />
        <TimerButton
          buttonAction={resetTimer}
          buttonValue={'Reset'}
          disable={disable}
        />
      </div>
    </div>
  )
}

export default Timer
