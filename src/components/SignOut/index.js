import React from "react";
import { SignOutBtn } from "../../styles/GlobalStyle";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <SignOutBtn onClick={firebase.doSignOut}>Sign Out</SignOutBtn>
);

export default withFirebase(SignOutButton);
