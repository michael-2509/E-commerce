import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import EarphonePage from "./pages/Speaker/Earphone";
import HeadphonePage from "./pages/Speaker/Headphon";

import SpeakerPage from "./pages/Speaker/Speaker";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/headphone" element={<HeadphonePage />} />
        <Route path="/earphone" element={<EarphonePage />} />
      </Routes>
    </Router>
  );
}

export default App;
