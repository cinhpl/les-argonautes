import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Composants/HomePage';
import Header from './Composants/Header';
import Footer from './Composants/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
