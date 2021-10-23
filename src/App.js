import React, { Suspense, lazy } from "react";

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Footer, Header, Loading } from "components";
import { links } from "data";
import { store } from "src/redux";

const About = lazy(() => import("pages/About"));
const ComponentExamples = lazy(() => import("pages/ComponentExamples"));
const Contact = lazy(() => import("pages/Contact"));
const Home = lazy(() => import("pages/Home"));

const {
  internal:{
    nav: {
      about,
      contact,
      componentExamples,
      home
    }
  }
} = links

export default () => (
  <HelmetProvider>
    <Provider store={store}>
      <Router>
        <Header />
        <main
          // style={{
          //   minHeight: "75vh"
          // }}
          className="w-100 h-100 flex-center-col"
        >
          <Suspense fallback={<Loading />}>
            <Route path={about} exact component={About} />
            <Route path={contact} exact component={Contact} />
            <Route path={componentExamples} exact component={ComponentExamples} />
            <Route path={home} exact component={Home} /> {/* keep this one last */}
          </Suspense>
        </main>
        <Footer />
      </Router>
    </Provider>
  </HelmetProvider>
);
