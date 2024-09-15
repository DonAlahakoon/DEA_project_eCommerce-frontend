import CategoryPage from "./App";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter basename="/category">
        <CategoryPage/>
    </BrowserRouter>
  );
}


