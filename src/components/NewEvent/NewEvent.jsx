import React, { useEffect } from 'react'
import { ReactComponent as Close } from '../../assets/close.svg'
import { ReactComponent as Delete } from '../../assets/delete.svg'
import { useForm } from "react-hook-form"

export const NewEvent = ({currMonth, toggleForm, addEvent, eventForEdit}) => {
  console.log(eventForEdit);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: {
      eventTitle: eventForEdit.eventTitle,
      description: eventForEdit.description,
      date: eventForEdit.date } });

  const onSubmit = (data) => {
    addEvent(data);
    reset({ ...data })
    toggleForm();
  }

  return (
    <div className="form-wrapper">
      <div className="form">
        <h2 className='form__title'>
          Add new event
          <Close
          onClick={toggleForm}
           />
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Please, add event title *" {...register("eventTitle", { required: true })} />
          {errors.eventTitle && <span>This field is required</span>}
          <textarea placeholder="Description" rows={6} {...register("description")} />
          <input type="date" defaultValue={currMonth.format('YYYY-MM-DD')} {...register("date")} />
          <input type="time" />
          <Delete />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}
