import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/" component={BurgerBuilder} />
              <Route render={() => <h1>Page Not Found</h1>} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
