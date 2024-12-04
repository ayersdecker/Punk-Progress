import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout';
import HomePage from './pages/home';
import TechnologyPage from './pages/technology';
import SustainabilityPage from './pages/sustainability';
import MovementsPage from './pages/movements';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/technology" element={<TechnologyPage/>}/>
        <Route path="/sustainability" element={<SustainabilityPage/>}/>
        <Route path="/movements" element={<MovementsPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
