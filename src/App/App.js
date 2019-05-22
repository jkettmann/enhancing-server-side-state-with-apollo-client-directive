import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import resolvers from './resolvers';
import BookList from '../BookList';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  resolvers,
});

const App = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      <BookList />
    </div>
  </ApolloProvider>
);

export default App;
