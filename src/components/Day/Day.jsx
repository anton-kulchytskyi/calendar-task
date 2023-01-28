import React from 'react'

export const Day = ({weekday, day}) => {
  return (
    <div className='cell--day'>
      <div>{weekday}</div>
      <div>{day}</div>
    </div>
  )
}
