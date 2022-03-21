import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { About } from './components/About';
import {Routes, Route} from "react-router-dom"
import { Users } from './components/Users';
import { Userdetails } from './components/Userdetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userid" element={<Userdetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
