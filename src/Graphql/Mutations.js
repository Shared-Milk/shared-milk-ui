import { gql } from "@apollo/client"

export const CREATE_DONOR = gql`
mutation createUser(
  $name: String!,
  $email: String!,
  $phone: String!,
  $bio: String!,
  $location: String!) {
  queryUsers(
    name: $name,
    email: $email,
    phone: $phone,
    bio: $bio,
    location: $location
  ) {
    id
    }
}`
  