import { useEffect, useState } from 'react';
import moment from 'moment';
import { CalendarGrid } from './components/CalendarGrid/CalendarGrid';
import { Header } from './components/Header/Header';
import { DataPicker } from './components/DataPicker/DataPicker';
import { NewEvent } from './components/NewEvent/NewEvent';
moment.updateLocale('en', {week: {dow: 1}});

function App() {
  window.moment = moment;
  const [startDay, setStartDay] = useState(moment().startOf('month').startOf('week'));
  const [currMonth, setToday] = useState(moment());
  const [events, setEvents] = useState([]);
  const [isDataPickerOpen, setIsDataPickerOpen] = useState(false);
  const [form, setForm] = useState(false);
  const [eventForEdit, setEventForEdit] = useState({})

  const passEvent = (currEvent) => {    
    const newEvents = events.filter(event => event.id !== currEvent.id)
    setEvents(newEvents);
    setEventForEdit(currEvent)
  }

  const toggleForm = () => {
    setForm(!form);
  }

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setEvents(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(events));
  }, [events]);

  const toggleDataPicker = () => {
    setIsDataPickerOpen(!isDataPickerOpen)
  }

  const setNewMonth = (newMonth) => {
    setToday(newMonth.clone())
    setStartDay(newMonth.startOf('month').startOf('week'))
  }

  const addMonth = () => {
    const newMonth = currMonth.clone().add(1, 'M');
    setNewMonth(newMonth);
  }

  const subMonth = () => {
    const newMonth = currMonth.clone().subtract(1, 'M');
    setNewMonth(newMonth);
  }

  const setFromDatePicker = (year, month) => {
    const newMonth = currMonth.year(year).month(month);
    setNewMonth(newMonth);
    setIsDataPickerOpen(!isDataPickerOpen)
  }

  return (
    <div className='App'>
      <Header
        currMonth={currMonth}
        addMonth={addMonth}
        subMonth={subMonth}
        toggleDataPicker={toggleDataPicker}
        toggleForm={toggleForm}
      />
      <CalendarGrid
        startDay={startDay}
        currMonth={currMonth}
        toggleForm={toggleForm}
        passEvent={passEvent}
        events={events}
      />
      {
        isDataPickerOpen && 
        <DataPicker
          currMonth={currMonth}
          setFromDatePicker={setFromDatePicker}
        />
      }
      {
        form &&
        <NewEvent
          currMonth={currMonth}
          toggleForm={toggleForm}
          addEvent={addEvent}
          eventForEdit={eventForEdit}
          setEventForEdit={setEventForEdit}
        />
      }
    </div>
  )
}

export default App
