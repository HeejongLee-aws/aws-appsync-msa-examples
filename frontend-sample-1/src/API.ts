/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type InputArtist = {
  ArtistId?: string | null,
  Concert?: string | null,
  TicketSales?: string | null,
};

export type Conditions = {
  ArtistId?: string | null,
  Concert?: string | null,
};

export type CreateArtistMutationVariables = {
  input?: InputArtist | null,
};

export type CreateArtistMutation = {
  createArtist:  {
    __typename: "Artist",
    ArtistId: string | null,
    Concert: string | null,
    TicketSales: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  input?: Conditions | null,
};

export type GetArtistQuery = {
  getArtist:  {
    __typename: "Artist",
    ArtistId: string | null,
    Concert: string | null,
    TicketSales: string | null,
  } | null,
};

export type GetConcertsByArtistIdQueryVariables = {
  input?: Conditions | null,
};

export type GetConcertsByArtistIdQuery = {
  getConcertsByArtistId:  Array< {
    __typename: "Artist",
    ArtistId: string | null,
    Concert: string | null,
    TicketSales: string | null,
  } | null > | null,
};
