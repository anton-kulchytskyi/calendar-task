import React, { useState } from 'react'
import { ReactComponent as AddEvent } from '../../assets/add.svg';
import { ReactComponent as DataPicker } from '../../assets/calendar.svg';
import { ReactComponent as LeftArrow } from '../../assets/left.svg';
import { ReactComponent as RightArrow } from '../../assets/right.svg';

export const Header = ({
  currMonth,
  addMonth,
  subMonth,
  toggleDataPicker,
  toggleForm
}) => {
  return (
    <div className='header'>
      <div>
        <span
          className='pointer'
          onClick={toggleForm}
        >
          <AddEvent />
        </span>
      </div>
      <div className='header__month'>
        <span
          className='pointer'
          onClick={subMonth}
        >
          <LeftArrow />
        </span>
        <div className='header__month--display'>{currMonth.format('MMMM YYYY')}</div>
        <span
          className='pointer'
          onClick={addMonth}
        >
          <RightArrow />
        </span>
        <span
          className='pointer'
          onClick={toggleDataPicker}
        >
          <DataPicker />
        </span>
      </div>
    </div>
  )
}
