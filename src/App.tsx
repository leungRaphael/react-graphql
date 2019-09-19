import React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo'
import client from './apolloClient';
import gql from 'graphql-tag';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ApolloProvider client={client}>
          <div>122</div>
        </ApolloProvider>
      </header>
    </div>
  );
}

export default App;
