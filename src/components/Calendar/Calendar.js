import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import WeekNames from './WeekNames';
import { eachDayOfInterval, getYear, getMonth, endOfMonth, getDate, format, isSameMonth, isSameDay } from 'date-fns';
import { takeMonth } from '../../utils/calendarUtils';

const Calendar = () => {
  // const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [activeMonth, setActiveMonth] = useState(getMonth(new Date()));
  // const [activeYear, setActiveYear] = useState(getYear(new Date()));

  // TODO:  ADD CALENDAR DISPLAY LOGIC
  // endOfMonth(date)
  // getMonth(date)
  // eachDayOfInterval(
  //   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) }
  // )

  // const daysInMonth = eachDayOfInterval({
  //   start: new Date(activeYear, activeMonth, 1),
  //   end: new Date(activeYear, activeMonth, getDate(endOfMonth(1))),
  // });

  // console.log('Days in month', daysInMonth);
  // console.log(activeMonth, 'activeMonth');

  const [selectedDate, setSelectedDate] = useState(new Date());

  const data = takeMonth(selectedDate)();

  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  const dayColor = (day) => {
    if (isSameDay(day, selectedDate)) return 'bg-green-800 text-white';
    return !isSameMonth(day, selectedDate)
      ? 'text-gray-600 dark:text-gray-600'
      : 'text-gray-800 hover:text-blue-500 dark:text-gray-400 hover:border-blue-500';
  };

  return (
    <div className="mt-6 sm:mt-10 flex justify-center overflow-scroll">
      <div className="flex-col">
        <CalendarHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <WeekNames />
        <div className="rounded-b-xl bg-gray-400 dark:bg-gray-800">
          {data.map((week) => (
            <div className="grid grid-cols-7">
              {week.map((day) => (
                <div>
                  <div
                    className={`w-24 h-24  flex items-center justify-center cursor-pointer border border-gray-700 ${dayColor(
                      day
                    )}`}
                    onClick={() => handleDateSelect(day)}
                  >
                    {format(day, 'dd')}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
