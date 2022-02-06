/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getIntention = /* GraphQL */ `
  query GetIntention($id: ID!) {
    getIntention(id: $id) {
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
export const listIntentions = /* GraphQL */ `
  query ListIntentions(
    $filter: ModelIntentionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntentions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _id
        title
        description
        date
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
