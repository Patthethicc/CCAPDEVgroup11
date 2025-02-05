import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import CreateProject from "./pages/CreateProject.jsx";
import EditProject from "./pages/EditProject.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ViewPost from "./pages/ViewPost.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="landing-page" element={<LandingPage />} />
        <Route path="login-page" element={<LogInPage />} />
        <Route index element={<SignUpPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home-page" element={<Home />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="profile-page" element={<ProfilePage />} />
          <Route path="edit-project" element={<EditProject />} />
          <Route path="view-post" element={<ViewPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
