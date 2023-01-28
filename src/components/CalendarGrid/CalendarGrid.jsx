import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { Day } from '../Day/Day';
import { Event } from '../Event/Event';

const totalDays = 42;

export const CalendarGrid = ({ startDay, currMonth, toggleForm, passEvent, events }) => {
  const day = startDay.clone().subtract(1, 'day');
  const realMonth = currMonth.month();
  const currDay = moment().format('YYYY-MM-DD');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const preperedDay = daysArray.map(day =>({
    currDay: day.format('YYYY-MM-DD'),
    month: day.month(),
    weekday: day.format("dd"),
    day: day.format("D"),
    events: events.filter(event => event.date === day.format('YYYY-MM-DD'))
  }));

  return (
    <div className='calendar-grid'>
      {preperedDay.map(day => (
        <div
          key={day.currDay}
          onClick={toggleForm}
          className={classNames('cell pointer',
              { 'cell--out': day.month !== realMonth },
              { 'cell--curr': day.currDay === currDay })}
        >
          <Day weekday={day.weekday} day={day.day} events={day.events} />
          {day.events.length ? <Event events={day.events} toggleForm={toggleForm} passEvent={passEvent} /> : ''}
        </div>
      ))}
    </div>
  )
}
