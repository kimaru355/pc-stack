import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BuildPc,
  Home,
  Login,
  Register,
  PageNotFound,
  Dashboard,
} from "./pages";

function App() {
  return (
    <div className="font-mono bg-base-200-">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/build-pc" element={<BuildPc />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
