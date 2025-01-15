import { Routes, Route } from 'react-router-dom';
import WorldGuitarCompetitionPage from './components/WorldGuitarCompetitionPage';
import FestivalPage from './components/FestivalPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/*" element={<WorldGuitarCompetitionPage />} />
          <Route path="/festival/*" element={<FestivalPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
