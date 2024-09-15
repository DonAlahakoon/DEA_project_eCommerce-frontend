import { useState, useEffect } from "react";
import { Card, cardRepo } from "../configs/config.jsx";

export default function Index(props) {
  /**
   * getting the request from the api
   */
  // const [cardData, setCardData] = useState({});
  // useEffect(() => {
  //   // Make a GET request to the microservice endpoint
  //   fetch("http://localhost:8080/api/v1/products")
  //     .then((response) => response.json())
  //     .then((responseData) => setCardData(responseData.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  //   console.log(cardData[1].name);
  // }, []);

  let cardItems = cardRepo.map((item, index) => (
    <Card
      key={index}
      name={item.Name}
      desc={item.description}
      src={item.img}
      alt={item.alt}
      price={item.price}
      star="5"
      Trigger={props.Trigger}
    />
  ));
  return (
    <div className="index">
      <div className="body-container">
        <div className="cards">{cardItems}</div>
      </div>
    </div>
  );
}
