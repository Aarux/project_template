import React, { Component } from "react";

import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import { Admin } from "../../styles/GlobalStyle";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  /*
  componendDidMount():

  When this lifecycle triggers it takes in all registered users. This page is only seen by users that have an Admin role.
  */

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <Admin>
        <h1>Admin Page</h1>
        <p>The Admin Page is accessible by every signed in Admin user.</p>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </Admin>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    <hr />
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID: </strong> {user.uid}{" "}
        </span>
        <br />
        <span>
          <strong>E-Mail: </strong> {user.email}{" "}
        </span>
        <br />
        <span>
          <strong>Username: </strong> {user.username}{" "}
        </span>
        <br />
        <span>
          <strong>Role: </strong> {user.roles}{" "}
        </span>
        <hr />
      </li>
    ))}
  </ul>
);

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), withFirebase)(AdminPage);
