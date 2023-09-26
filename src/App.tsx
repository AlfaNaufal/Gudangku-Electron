import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pinjam from "./components/Pinjam";
import DataPinjam from "./components/DataPinjam";
import Riwayat from "./components/Riwayat";
import DataAlat from "./components/DataAlat";
import TambahData from "./components/TambahData";
import EditData from "./components/EditData";
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinjam/:id" element={<Pinjam />} />
        <Route path="/dataPinjam" element={<DataPinjam />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/alat" element={<DataAlat />} />
        <Route path="/tambahData" element={<TambahData />} />
        <Route path="/editData/:id" element={<EditData />} />
      </Routes>
   </Router> 
  )
}

export default App;