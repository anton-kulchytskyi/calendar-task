import React from 'react'

export const Event = ({
  events,
  toggleForm,
  passEvent={passEvent}
}) => {
  return (
    events.map(ev => (
      <div
        className='cell--ev'
        key={ev.id}
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
