import { useState } from "react";

import {
  Header as HeaderComponent,
  Body as BodyComponent,
  Stars as StarController,
  Img as ImageController,
  Button,
  TextBoxWithoutLabel,
} from "../../configs/config.jsx";

/**
 * Card Component which uses to create a basic card
 * Owner: Demesh Fernando
 * Created Date: 22 July 2024
 * Last updated Date: 22 July 2024
 * @component
 * @param {object} props
 * @returns The card component with the provided attributes
 * @example
 * // Example usage:
 * const <Card
 *  name="Header of the card"
 *  desc="Any card body if available"
 *  src="If any image available url of the image"
 *  alt="Describe the image if the image is not available to display"
 *  price="Price need to be displayed"
 *  star="Star rating need to be displayed from 0 to 5" />;
 * return the card with the following added properties.
 */
export default function Card(props) {
  const [numberOfCartItems, setNumberOfCartItems] = useState(1);
  const listenToTextbox = (name, value) => {
    //value = value != typeof(Number) ? 1 : value;
    setNumberOfCartItems(Number.parseInt(value, 10));
  };
  const setCartValues = () => {
    props.Trigger(numberOfCartItems);
  };

  return (
    <div className="card">
      {props.src == "" ? null : (
        <div className="img">
          <ImageController
            src={props.src}
            alt={props.alt == "" ? "Image file" : props.alt}
          />
        </div>
      )}

      <div className="body">
        {props.name == "" ? null : (
          <div className="header">
            <HeaderComponent header={props.name} />
          </div>
        )}

        {props.desc == "" ? null : (
          <div className="description">
            <BodyComponent description={props.desc} />
          </div>
        )}

        {props.price == "" ? null : (
          <div className="price">
            <strong>
              $<span className="main-price">{props.price}</span>
            </strong>
          </div>
        )}

        {props.star == "-1" || props.star == null ? null : (
          <StarController star={props.star} />
        )}

        <div className="button-and-cart-item-container">
          <div className="button">
            <Button
              name="Add to cart"
              classEditors="continue"
              Trigger={setCartValues}
            />
          </div>
          <TextBoxWithoutLabel
            class="textbox"
            type="number"
            name="itemCount"
            id="itemCount"
            placeholder="1"
            getChange={(name, value) => {
              listenToTextbox(name, value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
