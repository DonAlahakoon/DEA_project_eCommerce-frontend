import { useState } from "react";
import { Link } from "react-router-dom";

import {
  CART_ICON,
  SEARCH_ICON,
  faBars,
  FontAwesomeIcon,
  TextBoxWithoutLabel,
  Button,
} from "../../configs/config.jsx";

/**
 * Nav bar component which uses to get the top navigation bar of the page.
 * Owner: Demesh Fernando
 * Created Date: 24 July 2024
 * Last updated Date: 01 August 2024
 * @component
 * @param {object} props
 * @returns The NavBar with the provided attributes
 * @example
 * // Example usage:
 * const <NavBar />;
 * return the NavBar with the following added properties.
 */
function NavBar(props) {
  return (
    <div className="navbar-container">
      <div className="shopify-header-left-section">
        <FontAwesomeIcon icon={faBars} className="fa-bars-navbar" />
        <a href="../../index.html" className="header-link">
          <h1>Shopify</h1>
        </a>
      </div>

      <div className="shopify-header-middle-section">
        <TextBoxWithoutLabel
          type="text"
          name="GlobalSearch"
          id="1"
          placeholder="Shopify Search"
          class="search-bar"
          getChange={props.SetGlobalChange}
        />

        <button
          onClick={() => {
            props.Trigger();
          }}
          className="search-button"
        >
          <img className="search-icon" src={SEARCH_ICON} />
        </button>
      </div>

      <div className="shopify-header-right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src={CART_ICON} />
          <div className="cart-quantity">{props.cartCount}</div>
          <div className="cart-text">Cart</div>
        </a>

        <a href="#" className="account-name">
          <span className="hello-text">Hello</span>
          <span className="account-holder-name">Demesh</span>
        </a>
      </div>
    </div>
  );
}

/**
 * Account Creation Nav bar component which uses to get specifically for the account creation nav bar.
 * Owner: Demesh Fernando
 * Created Date: 24 July 2024
 * Last updated Date: 01 August 2024
 * @component
 * @returns The NavBar with the provided attributes
 * @example
 * // Example usage:
 * const <AccountCreationNavBar />;
 * return the NavBar with the following added properties.
 */
function AccountCreationNavBar() {
  return (
    <div className="logo-header">
      <h1>Shopify</h1>
    </div>
  );
}

export { NavBar, AccountCreationNavBar };
