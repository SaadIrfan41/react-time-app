import React from 'react'
export type TimerButtonProps = {
  buttonAction: () => void
  buttonValue: string
  disable: boolean
}

export type TimerScreenProps = {
  minutes: number
  seconds: number
}

export const TimerButton: React.FC<TimerButtonProps> = ({
  buttonAction,
  buttonValue,
  disable,
}) => {
  return (
    <div className='button-container'>
      {disable && buttonValue === 'Start' ? (
        <button type='button' disabled className={``}>
          {buttonValue.toUpperCase()}
        </button>
      ) : (
        <button type='button' className='' onClick={buttonAction}>
          {buttonValue.toUpperCase()}
        </button>
      )}
    </div>
  )
}
