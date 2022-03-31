import { gql } from "@apollo/client"

export const CREATE_DONOR = gql`

mutation CreateUser(
  $name: String!
  $email: String!
  $phone: String!
  $bio: String!
  $location: String!
  $donorStatus: Int!
  ) {
  createUser(input: {
    name: $name,
    email: $email,
    phone: $phone,
    bio: $bio,
    location: $location,
    donorStatus: $donorStatus,
  }) {
    user {
      id
      name
    }
  }
}
`;
// mutation{
//   createUser(input: {
//     name: String,
//     email: String,
//     phone: String,
//     bio: String,
//     location: String,
//     donorStatus: Int}) {
//     createUser(
//       name: name,
//       email: email,
//       phone: phone,
//       bio: bio,
//       location: location
//       donorStatus: donorStatus
//     ) {
//       id
//       }
//       errors
//     }
// }`



// mutation CreateUser($input: CreateUserInput!) {
//   createUser (input: $input) {
//     name: String,
//     email: String,
//     phone: String,
//     bio: String,
//     location: String,
//     donorStatus: Int})
//   }
// export const CREATE_DONOR = gql`
// mutation 
//   createUser($input: 
//     {
//       name: $name,
//       email: $email,
//       phone: $phone,
//       bio: $bio,
//       location: $location,
//       donorStatus: 0
//     }) {
//       user {
//           id  
//       }
//       errors
//     }`
