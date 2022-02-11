/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      intention {
        id
        title
        customer
        description
        date
        createdAt
        updatedAt
      }
      status
      customer
      date
      createdAt
      updatedAt
      bookingIntentionId
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      intention {
        id
        title
        customer
        description
        date
        createdAt
        updatedAt
      }
      status
      customer
      date
      createdAt
      updatedAt
      bookingIntentionId
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      intention {
        id
        title
        customer
        description
        date
        createdAt
        updatedAt
      }
      status
      customer
      date
      createdAt
      updatedAt
      bookingIntentionId
    }
  }
`;
export const createIntention = /* GraphQL */ `
  mutation CreateIntention(
    $input: CreateIntentionInput!
    $condition: ModelIntentionConditionInput
  ) {
    createIntention(input: $input, condition: $condition) {
      id
      title
      customer
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateIntention = /* GraphQL */ `
  mutation UpdateIntention(
    $input: UpdateIntentionInput!
    $condition: ModelIntentionConditionInput
  ) {
    updateIntention(input: $input, condition: $condition) {
      id
      title
      customer
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteIntention = /* GraphQL */ `
  mutation DeleteIntention(
    $input: DeleteIntentionInput!
    $condition: ModelIntentionConditionInput
  ) {
    deleteIntention(input: $input, condition: $condition) {
      id
      title
      customer
      description
      date
      createdAt
      updatedAt
    }
  }
`;
