import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "/Users/verpchy/Desktop/dwellin.io/Dwellin.io/src/aws-exports.js";
Amplify.configure(awsExports);

function LoginPage({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(LoginPage);
