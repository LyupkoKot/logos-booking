import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { useRouter } from 'next/router';
import { format, isSameMonth, isSameDay } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import WeekNames from './WeekNames';
import { takeMonth } from '../../utils/calendarUtils';
import { listBookings } from '../../graphql/queries';
import { useUser } from '../../context/AuthContext';
import { Modal } from '../Modal/Modal';
import { Alert } from '../Alert/Alert';
import { CreateBookingForm } from '../CreateBookingForm/CreateBookingForm';
import { FaLock } from 'react-icons/fa';
import { AdminBookingPreview } from '../AdminBookingPreview/AdminBookingPreview';

const getAllBookings = /* GraphQL */ `
  query AllBookings {
    listBookings {
      items {
        id
        date
        status
      }
    }
  }
`;

const Calendar = () => {
  const { user, isAdmin } = useUser();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const month = takeMonth(selectedDate)();

  useEffect(() => {
    const fetchBookingsFromApi = async () => {
      const allBookings = await API.graphql({
        query: getAllBookings,
      });
      if (allBookings.data) {
        setBookings(allBookings.data.listBookings.items);
        return allBookings.data.listBookings.items;
      } else {
        throw new Error('Could not get bookings');
      }
    };

    fetchBookingsFromApi();
  }, [isModalOpen]);

  const handleDateSelect = (day, isBooked) => {
    const today = new Date();
    if (user) {
      if (!isBooked || (isBooked && isAdmin)) setSelectedDate(day);
      if ((day.getTime() > today.getTime() && !isBooked) || (isBooked && isAdmin)) setIsModalOpen(true);
    } else {
      router.push(`/login`);
    }
  };

  const dayColor = (day, isBooked) => {
    if (isSameDay(day, new Date())) return 'dark:bg-green-600 bg-green-500 text-white';
    if (isBooked) return 'dark:bg-yellow-800 bg-yellow-500 bg-opacity-75 text-white text-gray-500 dark:text-gray-500';
    if (isSameDay(day, selectedDate)) return 'bg-blue-500 text-white';
    return !isSameMonth(day, selectedDate)
      ? 'text-gray-300 dark:text-gray-600 bg-gray-400 dark:bg-gray-800'
      : 'text-gray-800 hover:text-blue-500 dark:text-gray-400 hover:border-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500';
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <div className="mt-6 sm:mt-10 flex justify-center overflow-scroll">
      <Alert errorText={signUpError} open={open} onClose={handleClose} className={'z-50'} />
      <div className="flex-col">
        <CalendarHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <WeekNames />
        <div className="rounded-b-xl bg-gray-400 dark:bg-gray-800">
          {month.map((week) => (
            <div className="grid grid-cols-7" key={week}>
              {week.map((day) => {
                const booked = bookings.find(
                  (item) => new Date(item.date).getTime() === day.getTime() && item.status !== 'REJECTED'
                );

                return (
                  <div key={day}>
                    <div
                      className={`relative md:w-24 md:h-24 w-10 h-10 flex items-center justify-center cursor-pointer border dark:border-gray-700 border-gray-300 ${dayColor(
                        day,
                        !!booked
                      )}`}
                      onClick={() => handleDateSelect(day, !!booked)}
                    >
                      {booked && (
                        <span className="absolute md:top-2 md:left-2 top-3 left-3 group">
                          {<FaLock />}
                          <span className="sidebar-tooltip top-[10] left-0 group-hover:scale-100">{'Reserved'}</span>
                        </span>
                      )}
                      {isAdmin && booked?.status === 'PENDING' && (
                        <span className="hidden md:block animate-ping absolute top-3 right-3 h-2 w-2 rounded-full ring-2 ring-yellow-300 bg-yellow-400"></span>
                      )}
                      <span className={`${booked ? 'hidden md:block' : ''}`}>{format(day, 'dd')}</span>
                    </div>
                    <Modal
                      label={`Mass Reservation for ${format(day, 'MMMM dd, yyyy')}`}
                      open={user && selectedDate.getTime() === day.getTime() && isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    >
                      {!booked && (
                        <CreateBookingForm
                          day={day}
                          closeModal={() => setIsModalOpen(false)}
                          openAlert={setOpen}
                          setSignUpError={setSignUpError}
                        />
                      )}
                      {isAdmin && booked && (
                        <AdminBookingPreview
                          booked={booked}
                          closeModal={() => setIsModalOpen(false)}
                          openAlert={setOpen}
                          setSignUpError={setSignUpError}
                        />
                      )}
                    </Modal>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
