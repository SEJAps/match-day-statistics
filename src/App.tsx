import { FC, lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router";
import { LoginPage } from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoutes';

const Home = lazy(() => import('./pages/Home'));
const Marcas = lazy(() => import('./pages/pruebaMarcas/Marcas'));
const HeatMap = lazy(() => import('./pages/heatmap/HeatMap'));
const Loading = lazy(() => import('./components/Loading'));

const App: FC = () => {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
        <Route path="/marcas/:stat" element={<Marcas />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/heatmap" element={<HeatMap />} /> */}
        <Route path='/heatmap/:team' element={<HeatMap />} />
        <Route path="*" element={<h1>Page not found¡</h1>} />
      </Routes>
    </Suspense>
  )

}

export default App
