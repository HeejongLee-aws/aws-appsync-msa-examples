/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($input: Conditions) {
    getArtist(input: $input) {
      ArtistId
      Concert
      TicketSales
    }
  }
`;
export const getConcertsByArtistId = /* GraphQL */ `
  query GetConcertsByArtistId($input: Conditions) {
    getConcertsByArtistId(input: $input) {
      ArtistId
      Concert
      TicketSales
    }
  }
`;
