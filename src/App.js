import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar, SuccessCard } from "./components";
import {
  Apply,
  Calculator,
  Home,
  LoanPage,
  Login,
  Main,
  Page404,
  Register,
} from "./pages";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="">
        <Routes>
          <Route
            path="/login"
            element={<ProtectedRoute component={<Main />} />}
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute component={<Main />} navigate={<Register />} />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute component={<Main />} navigate={<Home />} />
            }
          />
          <Route path="/calculator" element={<Calculator />} />
          <Route
            path="/loan"
            element={<ProtectedRoute component={<LoanPage />} />}
          />
          <Route
            path="/apply"
            element={<ProtectedRoute component={<Apply />} />}
          />
          <Route
            path="/success"
            element={<ProtectedRoute component={<SuccessCard />} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const ProtectedRoute = ({ component, navigate = <Login /> }) => {
  return localStorage.getItem("id") ? component : navigate;
};
export default App;
