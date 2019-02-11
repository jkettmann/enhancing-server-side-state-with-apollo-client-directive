import books from './books';

const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;
