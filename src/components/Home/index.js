import React from "react";
import { withAuthorization } from "../Session";
import { Home } from "../../styles/GlobalStyle";

const HomePage = () => (
  <Home>
    <h1>Home</h1>
    <p>"Huvudsida" som inloggad</p>
  </Home>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
