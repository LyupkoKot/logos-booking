/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getIntention = /* GraphQL */ `
  query GetIntention($id: ID!) {
    getIntention(id: $id) {
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
export const listIntentions = /* GraphQL */ `
  query ListIntentions(
    $filter: ModelIntentionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntentions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        customer
        description
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
