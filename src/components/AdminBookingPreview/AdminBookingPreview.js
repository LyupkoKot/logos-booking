import { useState, useEffect } from 'react';
import { API, Logger } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { getBooking } from '../../graphql/queries';
import { updateBooking } from '../../graphql/mutations';
import { FaCheck, FaTimes } from 'react-icons/fa';

export const AdminBookingPreview = ({ booked, closeModal, openAlert, setSignUpError }) => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBookingFromApi = async () => {
      const fetchedBooking = await API.graphql({
        query: getBooking,
        variables: { id: booked.id },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      if (fetchedBooking.data) {
        setBooking(fetchedBooking.data.getBooking);
        return fetchedBooking.data.getBooking.item;
      } else {
        throw new Error('Could not get bookings');
      }
    };

    fetchBookingFromApi();
  }, []);

  const handleApprove = async () => {
    if (confirm('Are you sure you want to approve a Mass Reservation?') == true) {
      try {
        const updateBookingInput = {
          id: booking?.id,
          status: 'APPROVED',
        };

        const updateNewBooking = await API.graphql({
          query: updateBooking,
          variables: { input: updateBookingInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        closeModal();
      } catch (err) {
        console.error(err);
        setSignUpError(err.message);
        openAlert(true);
      }
    }
  };

  const handleReject = async () => {
    if (confirm('Are you sure you want to cancel a Mass Reservation?') == true) {
      try {
        const updateBookingInput = {
          id: booking?.id,
          status: 'REJECTED',
        };

        const updateNewBooking = await API.graphql({
          query: updateBooking,
          variables: { input: updateBookingInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        closeModal();
      } catch (err) {
        console.error(err);
        setSignUpError(err.message);
        openAlert(true);
      }
    }
  };

  const getPingColor = (status) => {
    switch (status) {
      case 'PENDING':
        return 'ring-yellow-400 bg-yellow-600';
      case 'APPROVED':
        return 'ring-green-400 bg-green-600';
      case 'REJECTED':
        return 'ring-red-400 bg-red-600';
      default:
        return 'ring-gray-400 bg-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return 'text-yellow-600';
      case 'APPROVED':
        return 'text-green-600';
      case 'REJECTED':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-xl text-left font-semibold text-gray-800 dark:text-white">{booking?.intention.title}</h2>
      <p className="mt-4  text-lg text-left text-gray-800 dark:text-white mr-auto whitespace-normal">
        {booking?.intention.description}
      </p>
      <p className={`mt-4 relative text-lg text-left mr-auto whitespace-normal ${getStatusColor(booking?.status)}`}>
        Status: {booking?.status}
        <span
          className={`animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ${getPingColor(
            booking?.status
          )}`}
        ></span>
      </p>
      {booking?.status === 'PENDING' && (
        <div className="flex justify-between">
          <button className="primary-button w-full mt-10 mr-5" type="submit" onClick={handleApprove}>
            <FaCheck size={'15'} />
          </button>
          <button
            className="primary-button w-full mt-10 text-red-500 hover:bg-red-500"
            type="submit"
            onClick={handleReject}
          >
            <FaTimes size={'15'} />
          </button>
        </div>
      )}
      {booking?.status === 'APPROVED' && (
        <div className="flex justify-between">
          <button
            className="primary-button w-full mt-10 text-red-500 hover:bg-red-500 dark:hover:bg-red-500"
            type="submit"
            onClick={handleReject}
          >
            <FaTimes size={'15'} />
          </button>
        </div>
      )}
    </div>
  );
};
