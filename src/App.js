import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Input from "./componentes/digitar/Input";
import "./App.css";
import Comeco from "./componentes/componentstart/Comeco";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Comeco />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
