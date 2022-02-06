/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      _id
      intention {
        _id
        title
        description
        date
        id
        createdAt
        updatedAt
        owner
      }
      status
      date
      createdAt
      updatedAt
      id
      bookingIntentionId
      owner
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      _id
      intention {
        _id
        title
        description
        date
        id
        createdAt
        updatedAt
        owner
      }
      status
      date
      createdAt
      updatedAt
      id
      bookingIntentionId
      owner
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      _id
      intention {
        _id
        title
        description
        date
        id
        createdAt
        updatedAt
        owner
      }
      status
      date
      createdAt
      updatedAt
      id
      bookingIntentionId
      owner
    }
  }
`;
export const createIntention = /* GraphQL */ `
  mutation CreateIntention(
    $input: CreateIntentionInput!
    $condition: ModelIntentionConditionInput
  ) {
    createIntention(input: $input, condition: $condition) {
      _id
      title
      description
      date
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateIntention = /* GraphQL */ `
  mutation UpdateIntention(
    $input: UpdateIntentionInput!
    $condition: ModelIntentionConditionInput
  ) {
    updateIntention(input: $input, condition: $condition) {
      _id
      title
      description
      date
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteIntention = /* GraphQL */ `
  mutation DeleteIntention(
    $input: DeleteIntentionInput!
    $condition: ModelIntentionConditionInput
  ) {
    deleteIntention(input: $input, condition: $condition) {
      _id
      title
      description
      date
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
