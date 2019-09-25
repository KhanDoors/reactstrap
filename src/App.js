import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Three33 from "./pages/Three33";
import Three45 from "./pages/Three45";
import AdHoc from "./pages/AdHoc";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import Layout from "../src/layouts/Layout";
import { Navigationbar } from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";

import Login from "./components/auth/Login";
import Sidebar from "./layouts/Sidebar";
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Fragment>
        <Router>
          <Navigationbar />
          <Sidebar />
          <Layout>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Three33" component={Three33} />
                <Route exact path="/Three45" component={Three45} />
                <Route exact path="/AdHoc" component={AdHoc} />

                <Route exact path="/Login" component={Login} />
                <Route path="/" component={PageNotFound} />
              </Switch>
            </div>
          </Layout>
          <Footer />
        </Router>
      </Fragment>
    </ContactState>
  );
};

export default App;
