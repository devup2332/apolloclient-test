import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getUsers {
      id
      name
      address
      password
      phone
    }
  }
`;

gql`
  fragment user on User {
    id
    name
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!, $whithPosts: Boolean!) {
    getUser(id: $id) {
      ...user
      posts @include(if: $whithPosts) {
        id
        content
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CREATE_USER(
    $name: String
    $password: String
    $phone: String
    $address: String
  ) {
    createUser(
      name: $name
      password: $password
      phone: $phone
      address: $address
    ) {
      name
      password
      phone
      address
      id
    }
  }
`;
