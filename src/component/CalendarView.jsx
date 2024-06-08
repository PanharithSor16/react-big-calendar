import axios from 'axios';
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { BASE_URL } from '../states/url';
const localizer = momentLocalizer(moment);

const CalendarView = (props) => {
  const selectRoomId = localStorage.getItem("selectRoomId")
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const params = {};
      if (props.selectRoomId) { 
        params.roomID = props.selectRoomId;
        console.log(params)
      }
        const res = await axios.get(`${BASE_URL}/get`, {params}); // Replace with your API endpoint
        const data = res.data.map(event => ({
          ...event,
          title: event.meetingTitle,
          start: new Date(event.startTime),
          end: new Date(event.finishTime),
        }));
        console.log(data)
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [props.selectRoomId]);

  const dayPropGetter = (date) => {
    const day = date.getDay();
    if (day === 0) {
      return {
        className: 'bg-red-200',
      };
    }
    return {};
  };
  return (
    <div>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      dayPropGetter={dayPropGetter}
      style={{ height: 600 }}
      min={new Date(0, 0, 0, 7, 30, 0)}
      max={new Date(0, 0, 0, 17, 0, 0)}
    />
    </div>
    
  )
}

export default CalendarView