import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<h1>404 page not found</h1>} />
    </Routes>
  );
}

export default App;
