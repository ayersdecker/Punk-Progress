import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout';
import HomePage from './pages/home';
import TechnologyPage from './pages/technology';
import SustainabilityPage from './pages/sustainability';
import MovementsPage from './pages/movements';
import AiRevolutionPage from './pages/technology/airevolution';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/technology" element={<TechnologyPage/>}/>
        <Route path='/technology/airevolution' element={<AiRevolutionPage/>}/>
        <Route path="/sustainability" element={<SustainabilityPage/>}/>
        <Route path="/movements" element={<MovementsPage/>}/>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
