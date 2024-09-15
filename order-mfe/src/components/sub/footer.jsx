import {
  CART_ICON,
  SEARCH_ICON,
  faBars,
  FontAwesomeIcon,
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
export default function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="container-description">
          <h4>Header 1</h4>
          <ul>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
        </div>
        <div className="container-description">
          <h4>Header 1</h4>
          <ul>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
        </div>
        <div className="container-description">
          <h4>Header 1</h4>
          <ul>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
        </div>
        <div className="container-description">
          <h4>Header 1</h4>
          <ul>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
        </div>
      </div>

      <div className="shopify-footer-bottom">
        <h1>Shopify</h1>
      </div>
    </div>
  );
}
