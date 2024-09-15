import { BrowserRouter } from "react-router-dom";
import App from "./App";


export default function Root(props) {
  return (
    <BrowserRouter basename="/product">
      <App/>
    </BrowserRouter>
  )
}


