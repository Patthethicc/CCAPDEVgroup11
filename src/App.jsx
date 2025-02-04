import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import CreateProject from "./pages/CreateProject.jsx";
import EditProject from "./pages/EditProject.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="profile-page" element={<ProfilePage />} />
          <Route path="edit-project" element={<EditProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
