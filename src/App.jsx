import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          padding: 20,
          backgroundColor: "#ffe6f0"
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#d63384", fontWeight: "bold" }}>
          Home
        </Link>

        <Link to="/contact" style={{ textDecoration: "none", color: "#d63384", fontWeight: "bold" }}>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;