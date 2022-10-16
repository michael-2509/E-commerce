import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import EarphonePage from "./pages/CategoryPage/Earphone";
import HeadphonePage from "./pages/CategoryPage/Headphon";

import SpeakerPage from "./pages/CategoryPage/Speaker";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/speaker" element={<SpeakerPage />} />

        <Route path="/headphone" element={<HeadphonePage />} />
        {/* <Route
          path="/headphone/:xx99-mark-two-headphone"
          element={<ProjectPage />}
        /> */}
        <Route path="/earphone" element={<EarphonePage />} />
      </Routes>
    </Router>
  );
}

export default App;
