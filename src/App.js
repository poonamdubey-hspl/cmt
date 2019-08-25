import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Certificate from "./components/Certifications/Certificate";
import Activities from "./components/myActivites/activites";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Activities />
      </div>
    </ApolloProvider>
  );
}

export default App;
