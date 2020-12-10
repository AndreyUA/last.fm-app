import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Track from "./components/Track/Track";
import Artist from "./components/Artist/Artist";

import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/track" component={Track} />
              <Route path="/artist/:name" component={Artist} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
