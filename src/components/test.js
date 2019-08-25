import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Login from "./components/Authentication/Login";
import Certificate from "./components/Certifications/Certificate";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Login />
      </div>
    </ApolloProvider>
  );
}

export default App;
