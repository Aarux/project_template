import React from "react";

import { AuthUserContext } from "../Session";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization } from "../Session";
import { Account } from "../../styles/GlobalStyle";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Account>
        <h1>
          <strong>Account Page</strong>
        </h1>
        <h2>
          <strong>User ID: </strong> {authUser.uid}
        </h2>
        <h2>
          <strong>E-Mail: </strong> {authUser.email}
        </h2>
        <h2>
          <strong>Role: </strong> {authUser.roles}
        </h2>
        <h1 id="change">Change Password:</h1>
        <PasswordChangeForm />
      </Account>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
