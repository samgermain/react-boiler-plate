import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Footer, Header } from "components";
import { About, Contact, Four, Home } from "pages";
import { store } from "src/redux";

export default () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Route path="/404" exact component={Four} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/" exact component={Home} /> {/* keep this one last */}
      <Footer />
    </Router>
  </Provider>
);
