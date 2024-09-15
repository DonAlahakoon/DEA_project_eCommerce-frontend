import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import "./styles/screen-css.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/user-register" element={<RegisterScreen />} />
      </Routes>
    </>
  );
}

export default App;
