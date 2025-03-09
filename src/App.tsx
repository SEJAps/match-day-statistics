import { FC } from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { SigInPage } from "./pages/account/SigInPage";
import Marcas from "./pages/marcas/Marcas";
import HeatMap from "./pages/heatmap/HeatMap";
import { LayoutPublic } from "./layouts/LayoutPublic";
import About from "./pages/about/About";
import Stats from "./pages/private/stats/StatsPage";
import Account from "./pages/account/Account";
import PrivateRoute from "./pages/PrivateRoute";
import SignUpUserPage from "./pages/account/SignUpUserPage";
import PersonAreaPage from "./pages/private/personal_area/PersonAreaPage";
import TemplateAreaPage from "./pages/private/template_area/TemplateAreaPage";

const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<LayoutPublic />}>
        <Route index element={<About />} />
        <Route path="inicio" element={<Home />} />
        <Route path="cuenta" element={<Account />} />
        <Route path="login" element={<SigInPage />} />
        <Route path="registro" element={<SignUpUserPage />} />
        <Route path="*" element={<h1>Page not found¡</h1>} />
      </Route>
      <Route path="/private" element={<PrivateRoute />} >
        <Route path="person-area" element={<PersonAreaPage />} />
        <Route path="stats" element={<Stats />} />
        <Route path="template" element={<TemplateAreaPage />} />
        <Route path="marcas/:stat" element={<Marcas />} />
        <Route path="heatmap/:team" element={<HeatMap />} />
        <Route path="*" element={<h1>Page not found¡</h1>} />
      </Route>
      <Route path="*" element={<h1>Page not found¡</h1>} />
    </Routes>
  );
};

export default App;
