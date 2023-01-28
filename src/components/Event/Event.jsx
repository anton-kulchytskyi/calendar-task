import React from 'react'

export const Event = ({events, toggleForm, passEvent={passEvent}}) => {
  return (
    events.map(ev => (
      <div
        className='cell--ev'
        key={ev.date}
        onClick={() => {
          passEvent(ev);
          toggleForm()
        }}
      >
        {ev.eventTitle}
      </div>
    ))
  )
}
