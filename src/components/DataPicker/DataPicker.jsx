import React, { useState } from 'react'
import { ReactComponent as LeftArrow } from '../../assets/left.svg';
import { ReactComponent as RightArrow } from '../../assets/right.svg';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const DataPicker = ({currMonth, setFromDatePicker}) => {
  const [cnt, setCnt] = useState(+currMonth.format('YYYY'));

  return (
    <div className='data-picker'>
      <div className='data-picker--header'>
        <span
          onClick={() => {setCnt(cnt - 1)}}
        >
          <LeftArrow />
        </span>
        <div>{cnt}</div>
        <span
          onClick={() => {setCnt(cnt + 1)}}
        >
          <RightArrow />
        </span>
      </div>
      <div className='data-picker--months'>
        {months.map(month => (
          <span
            className='pointer'
            onClick={() => {
              // console.log(month, cnt);
              setFromDatePicker(cnt, month)
            }}
          >{month}</span>
        ))}
      </div>
    </div>
  )
}
