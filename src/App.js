import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  DetailPosting,
  DetailProfile,
  GetStarted,
  Login,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post/:id" element={<DetailPosting />} />
          <Route path="/profile/:id" element={<DetailProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
