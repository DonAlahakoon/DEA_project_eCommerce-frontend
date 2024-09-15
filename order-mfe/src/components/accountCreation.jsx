import { useState } from "react";

import {
  AccountCreationNavBar,
  TextBox,
  FontAwesomeIcon,
  faCaretRight,
  Button,
} from "../configs/config.jsx";

export default function CreateAccount() {
  const [listenEntries, setListenEntries] = useState({
    name: "",
    emailId: "",
    password: "",
  });

  const setValues = (changingID, value) => {
    let newJSON = { ...listenEntries };
    switch (changingID) {
      case "name":
        newJSON = { ...newJSON, name: value };
        break;
      case "emailId":
        newJSON = { ...newJSON, emailId: value };
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

  return (
    <div className="shopify-account-creation-header">
      <AccountCreationNavBar />

      <div className="main-body-account-creation">
        <div className="center-card">
          <h1 className="create-account-header">Create an Account</h1>
          <div className="name input-section">
            <TextBox
              id="name"
              labelName="Your Name"
              type="text"
              name="name"
              onChange={setValues}
            />
          </div>
          <div className="email-address input-section">
            <TextBox
              id="emailId"
              labelName="Email Address"
              type="email"
              name="emailId"
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
          <div className="re-enter-password input-section">
            <TextBox
              id="reEnterPassword"
              labelName="Re-enter password"
              type="password"
              name="re-enter-password"
              onChange={setValues}
            />
          </div>
          <Button name="Continue" classEditors="continue" />
          <p className="have-account-text">
            Already have an account?
            <a href="#">
              Sign in
              <FontAwesomeIcon icon={faCaretRight} className="fa-care-right" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
