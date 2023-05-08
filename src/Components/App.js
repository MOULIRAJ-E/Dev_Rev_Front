import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LibraryPage from './LibraryPage';
import Info from './Info';
import Info2 from './Info2';
import Home from './Home';
import About from './About';
import Membership from './Membership';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<LibraryPage />} />
          <Route path="/member" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:id" element={<Info2/>} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
