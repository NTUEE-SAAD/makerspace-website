import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Staff, About, Items } from "./containers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
