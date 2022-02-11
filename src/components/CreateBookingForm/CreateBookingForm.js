import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API, Storage } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { createBooking, createIntention } from '../../graphql/mutations';
import Input from '../Input/Input';

export const CreateBookingForm = ({ day, closeModal, openAlert, setSignUpError }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    if (confirm('Are you sure you want to submit a Mass Reservation?') == true) {
      try {
        const createIntentionInput = {
          title: data.title,
          description: data.description,
          date: day,
        };

        const createNewIntention = await API.graphql({
          query: createIntention,
          variables: { input: createIntentionInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        const createBookingInput = {
          bookingIntentionId: createNewIntention.data.createIntention.id,
          status: 'PENDING',
          date: day,
        };

        const createNewBooking = await API.graphql({
          query: createBooking,
          variables: { input: createBookingInput },
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center">
        <Input
          id="title"
          label="Title"
          error={errors.title ? true : false}
          errorText={errors.title ? errors.title.message : ''}
          required={true}
          register={register('title', {
            required: { value: true, message: 'Please enter a title' },
            maxLength: { value: 20, message: 'Please enter a title between 3-20 characters' },
            minLength: { value: 3, message: 'Please enter a title between 3-20 characters' },
          })}
        />
        <Input
          id="description"
          label="Description"
          error={errors.description ? true : false}
          errorText={errors.description ? errors.description.message : ''}
          required={true}
          register={register('description', {
            required: { value: true, message: 'Please enter a description' },
            maxLength: { value: 5000, message: 'Please enter a description between 3-5000 characters' },
            minLength: { value: 3, message: 'Please enter a description between 3-5000 characters' },
          })}
        />
        <button className="primary-button w-full mt-10" type="submit">
          {'Submit'}
        </button>
      </div>
    </form>
  );
};
