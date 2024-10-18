import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Map from './pages/Map';
import Hikes from './pages/Hikes';
import HikingDetail from './pages/HikingDetail';
import Error from './pages/Error';
import Footer from './components/Footer';

const App = () => {

    return (
      <Router> 
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<Map />} />
          <Route path="/hikes" element={<Hikes />} />
          <Route path="/hikes/:id" element={<HikingDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    )
}

export default App;