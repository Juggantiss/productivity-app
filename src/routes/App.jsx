import { Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AddTodo from "../pages/AddTodo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddTodo />} />
      <Route
        path="*"
        element={
          <Typography variant="h1" component="div" gutterBottom>
            404 page not found
          </Typography>
        }
      />
    </Routes>
  );
}

export default App;
