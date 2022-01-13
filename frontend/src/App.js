import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Staff, About, HomeRoot } from "./containers";
import { HomeContent } from "./containers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeRoot />}>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/home/about" element={<About />} />
        </Route>
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;
