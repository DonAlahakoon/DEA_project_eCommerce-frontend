import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Layout, Index } from "./configs/config";

function App() {
  /**
   * Cart count controlling state
   */
  const [cartCount, setCartCount] = useState(0);
  const Trigger = (cartCount) => {
    setCartCount((prevCount) => prevCount + cartCount);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout cartCount={cartCount > 99 ? "9+" : cartCount} />}
        >
          <Route index element={<Index Trigger={Trigger} />} />
          {/* <Route path="/cartView" element={<CartView />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
