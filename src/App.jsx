import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Company from "./pages/Company";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
