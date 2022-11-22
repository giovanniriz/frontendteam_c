import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "./calendar.css";

function CalendarTutor() {
  const [calendarDetails, setCalendarDetails] = useState([]);
  const [event, setEvent] = useState({});
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    const store = window.localStorage;
    const token = store.getItem("tokenTutor");
    axios
      .get("https://tutorins.herokuapp.com/api/v1/booking/tutor", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCalendarDetails(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dates = calendarDetails.map((e) => {
    return {
      allDay: false,
      start: new Date(`${e.date}`),
      end: new Date(`${e.date}`),
      title: e.student_id && e.student_id.fullname,
    };
  });

  // calendarDetails.map(e => {
  //   allDay: false,
  //   start: e.date,
  //   end: e.data,
  //   title: Design
  // })

  console.log(dates, "xxxx");

  const Events = [
    {
      allDay: false,
      start: new Date(`${dates[0]}`),
      end: new Date(`${dates[0]}`),
      title: "Design",
    },
  ];
  return (
    <div>
      <p className="title-calendar">Calendar</p>

      <Calendar
        localizer={localizer}
        events={dates}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default CalendarTutor;
