import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const UNSELECT_ALL_BOOKS_MUTATION = gql`
  mutation {
    unselectAllBooks @client
  }
`;

const UnselectAllBooksButton = () => (
  <Mutation mutation={UNSELECT_ALL_BOOKS_MUTATION}>
    {
      unselectAllBooks => (
        <button onClick={unselectAllBooks}>
          Unselect all books
        </button>
      )
    }
  </Mutation>
);

export default UnselectAllBooksButton;
