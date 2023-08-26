import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as components from "./components/index.js";
import * as pages from "./pages/index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <components.NavBar />
        <Routes>
          <Route path="/" element={<pages.Home />}></Route>
          <Route path="/about" element={<pages.About />}></Route>
          <Route path="/service" element={<pages.Service />}></Route>
          <Route path="/contact" element={<pages.Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
