import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
