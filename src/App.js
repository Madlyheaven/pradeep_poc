import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Home from "./components/home";
import Main from "./components/main";
import { Footer } from "./components";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="min-vh-100">
        <Routes>
          {/* dummy */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
