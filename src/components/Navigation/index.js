import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavBtn } from "../../styles/GlobalStyle";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";
import * as ROLES from "../../constants/roles";

const Navigation = props => (
  <Nav>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuthComplete authUser={authUser} {...props} />
        ) : (
          <NavigationNonAuth {...props} />
        )
      }
    </AuthUserContext.Consumer>
  </Nav>
);

class NavigationAuthBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <NavBtn>
          <NavLink exact to={ROUTES.HOME}>
            Home
          </NavLink>
        </NavBtn>
        <NavBtn>
          <NavLink exact to={ROUTES.GALLERY}>
            Gallery
          </NavLink>
        </NavBtn>
        <NavBtn>
          <NavLink exact to={ROUTES.NEWS}>
            News
          </NavLink>
        </NavBtn>
        <NavBtn>
          <NavLink exact to={ROUTES.EVENTS}>
            Events
          </NavLink>
        </NavBtn>
        <NavBtn>
          <NavLink exact to={ROUTES.JOIN_US}>
            Join Us
          </NavLink>
        </NavBtn>
        <NavBtn>
          <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
        </NavBtn>
        {this.props.authUser.roles.includes(ROLES.ADMIN) && (
          <NavBtn>
            <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
          </NavBtn>
        )}
        <NavBtn>
          <SignOutButton />
        </NavBtn>
      </Fragment>
    );
  }
}

const NavigationNonAuth = () => (
  <Fragment>
    <NavBtn>
      <NavLink exact to={ROUTES.LANDING}>
        Frontpage
      </NavLink>
    </NavBtn>
    <NavBtn>
      <NavLink exact to={ROUTES.GALLERY}>
        Gallery
      </NavLink>
    </NavBtn>
    <NavBtn>
      <NavLink exact to={ROUTES.NEWS}>
        News
      </NavLink>
    </NavBtn>
    <NavBtn>
      <NavLink exact to={ROUTES.ABOUT_US}>
        About Us
      </NavLink>
    </NavBtn>
    <NavBtn>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </NavBtn>
  </Fragment>
);

const NavigationAuthComplete = withFirebase(NavigationAuthBase);

export default Navigation;
