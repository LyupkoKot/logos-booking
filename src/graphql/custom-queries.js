export const allBookings = await API.graphql(graphqlOperation(` 
query AllBookings {
listBookings {
    items {
      date
      status
    }
  }
}
`))