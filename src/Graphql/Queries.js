import {gql} from '@apollo/client'

export const GET_ALL_DONORS = gql `
  query {
    queryUsers {
      id
      name
      email
      phone
      bio
      location
    }
  }
`