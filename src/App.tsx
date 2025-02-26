import { FC } from 'react';
import { Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoutes';
import Marcas from './pages/pruebaMarcas/Marcas';
import VistaUno from './pages/VistaUno';

const App: FC = () => {

  return <Routes>
    <Route path="/" element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>} />
    <Route path="/vista-uno" element={<VistaUno />} />
    <Route path="/marcas/:stat" element={<Marcas />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<h1>Page not found¡</h1>} />
  </Routes>
}

export default App
