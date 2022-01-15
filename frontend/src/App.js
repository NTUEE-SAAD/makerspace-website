import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Staff,
  About,
  HomeRoot,
  HomeContent,
  Items,
  StaffRoot,
  PostRoutes,
} from "./containers";
import { PostProvider } from "./contexts";

function App() {
  return (
    <PostProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeRoot />}>
            <Route path="/home" element={<HomeContent />} />
            <Route path="/home/about" element={<About />} />
            <Route path="/home/items" element={<Items />} />
          </Route>
          <Route path="/staff" element={<StaffRoot />}>
            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/items" element={<Items />} />
          </Route>
        </Routes>
        <PostRoutes />
      </Router>
    </PostProvider>
  );
}

export default App;
