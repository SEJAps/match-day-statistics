import { FC } from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import Marcas from "./pages/marcas/Marcas";
import HeatMap from "./pages/heatmap/HeatMap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./apis/firebase";
import { LayoutPublic } from "./layouts/LayoutPublic";
import About from "./pages/about/About";
import Stats from "./pages/stats/StatsPage";
const App: FC = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Usuario logueado");
    } else {
      console.log("Usuario no logueado");
    }
  });
  return (
    <Routes>
      <Route path="/" element={<LayoutPublic />}>
        <Route index element={<About />} />
        <Route path="inicio" element={<Home />} />
        <Route path="stats" element={<Stats />} />
        <Route path="marcas/:stat" element={<Marcas />} />
        <Route path="heatmap/:team" element={<HeatMap />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<h1>Page not found¡</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
