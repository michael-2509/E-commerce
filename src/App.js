import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SpeakerPage from "./pages/Speaker/Speaker";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/speaker" element={<SpeakerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
