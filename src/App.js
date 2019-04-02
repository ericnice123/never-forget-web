import React, { Component } from "react";
import "./App.css";
import Home from "./components/homeComponents";
import AppProvider from './components/appProviderComponent';


class App extends Component {
  render() {
    return (
      <AppProvider>
        <Home />
      </AppProvider>
    )
  }
}

export default App;
