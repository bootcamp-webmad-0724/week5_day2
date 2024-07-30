// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NewProjectPage from "./pages/NewProjectPage/NewProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetails/ProjectDetailsPage.jsx";
import ProjectEditPage from "./pages/ProjectEditPage/ProjectEditPage.jsx";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<ProjectEditPage />} />
        <Route path="/create" element={<NewProjectPage />} />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

    </div>
  )
}

export default App