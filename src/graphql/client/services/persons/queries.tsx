import { gql } from "@apollo/client";

export const getPersons = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
