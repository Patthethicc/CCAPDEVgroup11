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
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = function (title) {
    setSearch(title);
  };

  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route
          path="/"
          element={<Layout handleSearch={handleSearch} search={search} />}
        >
          <Route
            path="home"
            element={<Home search={search} setSearch={setSearch} />}
          />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="user/:userId" element={<ProfilePage />} />
          <Route path="edit-project/:postId" element={<EditProject />} />
          <Route path="view-project/:postId" element={<ViewPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
