import { gql } from "@apollo/client"

export const CREATE_DONOR = gql`
mutation createUser(
  $name: String!,
  $email: String!,
  $phone: String!,
  $bio: String!,
  $location: String!
  $donor_status: Int) {
  queryUsers(
    name: $name,
    email: $email,
    phone: $phone,
    bio: $bio,
    location: $location
    donor_status: $donor_status
  ) {
    id
    }
}`
  