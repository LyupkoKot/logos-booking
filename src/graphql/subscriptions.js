/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking($owner: String) {
    onCreateBooking(owner: $owner) {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking($owner: String) {
    onUpdateBooking(owner: $owner) {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking($owner: String) {
    onDeleteBooking(owner: $owner) {
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
export const onCreateIntention = /* GraphQL */ `
  subscription OnCreateIntention($owner: String) {
    onCreateIntention(owner: $owner) {
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
export const onUpdateIntention = /* GraphQL */ `
  subscription OnUpdateIntention($owner: String) {
    onUpdateIntention(owner: $owner) {
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
export const onDeleteIntention = /* GraphQL */ `
  subscription OnDeleteIntention($owner: String) {
    onDeleteIntention(owner: $owner) {
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
