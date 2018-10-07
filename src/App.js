import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Layout>
            <BurgerBuilder />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
