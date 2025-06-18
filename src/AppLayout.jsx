import Header from "./components/ui/HomePage/Header";
import AboutMe from "./components/ui/AboutMe/AboutMe";
import Footer from "./components/ui/HomePage/Footer";
import HomePage from "./components/ui/HomePage";
import Login from "./components/ui/login/login";
import { Routes, Route, useLocation } from "react-router-dom";
import PrivateRoute from "./components/security/PrivateRoute";

export default function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/aboutme"
          element={
            <PrivateRoute>
              <AboutMe />
            </PrivateRoute>
          }
        />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
}
