import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import EarphonePage from "./pages/CategoryPage/Earphone";
import HeadphonePage from "./pages/CategoryPage/Headphon";
import SpeakerPage from "./pages/CategoryPage/Speaker";
// import ProjectPage from "./pages/ProjectPage";
import Product from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/speaker/:slug" element={<Product />} />
        <Route path="/headphone" element={<HeadphonePage />} />
        <Route path="/headphone/:slug" element={<Product />} />
        <Route path="/earphone" element={<EarphonePage />} />
        <Route path="/earphone/:slug" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
