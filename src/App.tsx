import { FC } from 'react';
import { Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoutes';
import Marcas from './pages/pruebaMarcas/Marcas';
import Layout from './layouts/Layout';


const App: FC = () => {
  return <Layout src="./webp/imagen_login_stats.webp">
    <Routes>
      <Route path="/" element={<ProtectedRoute>
        <Home />
      </ProtectedRoute>} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<h1>Page not found¡</h1>} />
    </Routes>
  </Layout>
}

export default App
