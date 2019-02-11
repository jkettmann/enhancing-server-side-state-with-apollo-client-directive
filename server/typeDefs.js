import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    id: String!
    author: String!
    title: String!
  }

  type Query {
    books: [Book]
  }
`;

export default typeDefs;
