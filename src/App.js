import React, { Suspense, lazy } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Footer, Header, Loading } from "components";
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const Four = lazy(() => import("pages/404"));
const Home = lazy(() => import("pages/Home"));
import { store } from "src/redux";

export default () => (
  <HelmetProvider>
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Suspense fallback={<Loading />}>
            <Route path="/404" exact component={Four} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} /> {/* keep this one last */}
          </Suspense>
        </main>
        <Footer />
      </Router>
    </Provider>
  </HelmetProvider>
);
