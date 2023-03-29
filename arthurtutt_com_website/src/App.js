import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivacyPolicy from './pages/privacy-policy/privacy-policy.js'
import Homepage from './pages/homepage/homepage.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Homepage/>} />

            <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />

      </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
