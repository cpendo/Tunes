import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "./components";
import { Discover, AroundYou, TopArtists, TopCharts, NotFound } from "./pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Discover />} />
        <Route path="around-you" element={<AroundYou />} />
        <Route path="top-artists" element={<TopArtists />} />
        <Route path="top-charts" element={<TopCharts />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
