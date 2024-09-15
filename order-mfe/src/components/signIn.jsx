import { useState } from "react";

import {
  AccountCreationNavBar,
  TextBox,
  FontAwesomeIcon,
  faCaretRight,
  Button,
  credentialsRepo,
} from "../configs/config.jsx";

export default function SignIn() {
  const [listenEntries, setListenEntries] = useState({
    userName: "",
    password: "",
  });

  const setValues = (changingID, value) => {
    let newJSON = { ...listenEntries };
    switch (changingID) {
      case "username":
        newJSON = { ...newJSON, userName: value };
        break;
      case "password":
        newJSON = { ...newJSON, password: value };
        break;
      default:
        newJSON = { ...listenEntries };
        break;
    }
    setListenEntries(newJSON);
  };

  const triggerSignIn = () => {
    if (
      credentialsRepo.userName === listenEntries.userName &&
      credentialsRepo.password === listenEntries.password
    ) {
      console.log("You are signed In");
    } else {
      console.log("Username or password is incorrect");
    }
    console.log(listenEntries);
  };

  return (
    <div className="shopify-sign-in-header">
      <AccountCreationNavBar />

      <div className="main-body-sign-in">
        <div className="center-card">
          <h1 className="sign-in-header">Sign In</h1>
          <div className="user-name input-section">
            <TextBox
              id="Username"
              labelName="Username"
              type="text"
              name="username"
              onChange={setValues}
            />
          </div>
          <div className="password input-section">
            <TextBox
              id="password"
              labelName="Password"
              type="password"
              name="password"
              onChange={setValues}
            />
          </div>
          <Button
            name="Sign In"
            classEditors="continue"
            Trigger={triggerSignIn}
          />
          <p className="have-account-text">
            Don't have an account?
            <a href="#">
              Create one
              <FontAwesomeIcon icon={faCaretRight} className="fa-care-right" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
