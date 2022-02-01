import React from 'react';
import { format, addMonths } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CalendarHeader = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex justify-between mr-auto mb-2 my-auto rounded-xl bg-gray-400 dark:bg-gray-900 ">
      <div
        className="flex px-2 items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 cursor-pointer"
        onClick={() => setSelectedDate(addMonths(selectedDate, -1))}
      >
        <FaArrowLeft size="20" />
      </div>
      <h1
        className="text-2xl tracking-wider font-bold 
      text-gray-600 dark:text-gray-400 
         align-middle"
      >{`${format(selectedDate, 'MMMM')}, ${format(selectedDate, 'yyyy')}`}</h1>
      <div
        className="flex px-2 items-center justify-center text-gray-600 hover:text-blue-500 dark:text-gray-400 cursor-pointer"
        onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
      >
        <FaArrowRight size="20" />
      </div>
    </div>
  );
};

export default CalendarHeader;
