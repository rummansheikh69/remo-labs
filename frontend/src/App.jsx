import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Whitepaper from "./pages/Whitepaper";
import Docs from "./pages/Docs";
import Purpose from "./pages/Purpose";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/remo/purpose" element={<Purpose />} />
      </Routes>
    </div>
  );
}

export default App;
