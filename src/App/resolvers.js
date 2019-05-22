import gql from 'graphql-tag';

const resolvers = {
  Book: {
    selected: (book) => book.selected || false,
  },
  Mutation: {
    toggleBook: (_, args, { cache, getCacheKey }) => {
      const id = getCacheKey({ id: args.id, __typename: 'Book' });
      const fragment = gql`
        fragment bookToSelect on Book {
          selected
        }
      `;
      const book = cache.readFragment({ fragment, id });
      const data = { ...book, selected: !book.selected };
      cache.writeFragment({ fragment, id, data });
      return null;
    },
  },
};

export default resolvers;
