import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import CreateProject from "./pages/CreateProject.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />}/>
          <Route path="login-page" element={<LogInPage />}/>
          <Route path="signup-page" element={<SignUpPage />}/>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="profile-page" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
