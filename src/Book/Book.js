import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const SELECT_BOOK_MUTATION = gql`
  mutation {
    toggleBook(id: $id) @client
  }
`;

const Book = ({ id, author, title }) => (
  <Mutation mutation={SELECT_BOOK_MUTATION}>
    {
      toggleBook => (
        <p onClick={() => toggleBook({ variables: { id } })}>
          {title} by {author}
        </p>
      )
    }
  </Mutation>
);

export default Book;
