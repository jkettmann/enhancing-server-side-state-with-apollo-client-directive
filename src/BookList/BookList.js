import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Book from '../Book';

const BOOKS_QUERY = gql`
  query {
    books {
      id
      author
      title
    }
  }
`;

const BookList = () => (
  <Query query={BOOKS_QUERY}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <p>Loading</p>;
        }

        if (error) {
          return <p>Error: {error.message}</p>
        }

        return (
          <React.Fragment>
            {data.books.map(book => (
              <Book key={book.id} {...book} />
            ))}
          </React.Fragment>
        )
      }
    }
  </Query>
);

export default BookList;
