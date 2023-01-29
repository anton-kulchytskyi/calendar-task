import React, { useEffect } from 'react';
import moment from 'moment';
import { ReactComponent as Close } from '../../assets/close.svg'
import { ReactComponent as Delete } from '../../assets/delete.svg'
import { useForm } from "react-hook-form"

export const NewEvent = ({currMonth, toggleForm, addEvent, eventForEdit, setEventForEdit}) => {
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
    const id = eventForEdit.id ? eventForEdit.id : moment().format('D.MM.YYYY HH:mm:ss');
    const update = eventForEdit.id ? moment().format('D.MM.YYYY HH:mm:ss') : '';
    const event = {
      id: id,
      update: update,
      ...data,
    }
    addEvent(event);
    reset({ ...event })
    setEventForEdit({})
    toggleForm();
  }

  return (
    <div className="modal-wrapper">
      <div className="form modal">
        <h2 className='form__title'>
          Add new event
          <Close
            onClick={toggleForm}
          />
        </h2>
        {
          eventForEdit.id && 
          <>
            <span>Created at: {eventForEdit.id}</span>
            <br/>
          </>
        }
        {
          eventForEdit.update &&
          <span>Update at: {eventForEdit.update}</span>
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Please, add event title *"
            {...register("eventTitle", { required: true })}
          />
          {
            errors.eventTitle &&
            <span className='error'>This field is required</span>
          }
          <textarea
            placeholder="Description"
            rows={6}
            {...register("description")}
          />
          <input
            type="date"
            defaultValue={currMonth.format('YYYY-MM-DD')}
            {...register("date")}
          />
          <input type="time" />
          <div className='form-footer'>
            {
              eventForEdit.id &&
              <Delete
                onClick={() => {
                  setEventForEdit({}),
                  toggleForm()
                }}
              />
            }
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
