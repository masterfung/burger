import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Layout>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={BurgerBuilder} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
