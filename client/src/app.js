import React from "react";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./redux/slice/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
// Importing public and private routes
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import PublicRoutes from "./utils/PublicRoutes";
// Importing files to creates routes to them
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";
import PeriodPage from "./pages/periodPage/Period";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/loginPage/LoginPage";
import SignUp from "./pages/signUpPage/SignUp";
import UserPage from "./pages/profilePage/UserProfile";
import ResetPage from "./pages/resetPage/ResetPage";
import QuestionnairePage from "./pages/questionnairePage/Questionnaire.js";
import SettingsPage from "./pages/settingsPage/Settings";
import LogoutPage from "./pages/logoutPage/LogoutPage";
import Resources from "./pages/resourcesPage/Resources";
import Statistics from "./pages/statisticsPage/Statistics";

function App() {

// Save the user token from firebase to the global state and update it every time user state changes

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useSelector((state) => state.auth.value);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.accessToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}></Route>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/period" element={<PeriodPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Reset" element={<ResetPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
          <Route path="/logout" element={<LogoutPage />}></Route>
          <Route path="/Statistics" element={<Statistics />}></Route>
          <Route path="/UserProfile/*" element={<UserPage />}></Route>
          <Route path="/questionnaire" element={<QuestionnairePage />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
