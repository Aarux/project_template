import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import GalleryPage from "../Gallery";
import NewsPage from "../News";
import EventsPage from "../Events";
import AboutUsPage from "../AboutUs";
import JoinUsPage from "../JoinUs";
import HomePage from "../Home";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import { GlobalStyle, Header, Body } from "../../styles/GlobalStyle";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <GlobalStyle />
          <Header>
            <Navigation />
          </Header>
          <Body>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.GALLERY} component={GalleryPage} />
            <Route exact path={ROUTES.NEWS} component={NewsPage} />
            <Route exact path={ROUTES.ABOUT_US} component={AboutUsPage} />
            <Route exact path={ROUTES.EVENTS} component={EventsPage} />
            <Route exact path={ROUTES.JOIN_US} component={JoinUsPage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              exact
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          </Body>
        </Fragment>
      </Router>
    );
  }
}
export default withAuthentication(App);
