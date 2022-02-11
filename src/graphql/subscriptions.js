/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking($customer: String) {
    onCreateBooking(customer: $customer) {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking($customer: String) {
    onUpdateBooking(customer: $customer) {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking($customer: String) {
    onDeleteBooking(customer: $customer) {
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
export const onCreateIntention = /* GraphQL */ `
  subscription OnCreateIntention($customer: String) {
    onCreateIntention(customer: $customer) {
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
export const onUpdateIntention = /* GraphQL */ `
  subscription OnUpdateIntention($customer: String) {
    onUpdateIntention(customer: $customer) {
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
export const onDeleteIntention = /* GraphQL */ `
  subscription OnDeleteIntention($customer: String) {
    onDeleteIntention(customer: $customer) {
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
