import { gql } from '@apollo/client';

export const GET_ALL_DONORS = gql`
  query {
    users {
      id
      name
      email
      phoneFormatter
      bio
      location
    }
  }
`;