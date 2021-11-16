import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminContact from "./components/AdminContact/AdminContact";
import Home from "./components/Home/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/admin/contact" exact element={<AdminContact />} />
            <Route path="/admin/contact/:status" exact element={<AdminContact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
