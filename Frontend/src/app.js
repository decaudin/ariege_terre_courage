import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Map } from './pages/Map';
import { HikesList } from './pages/HikesList';
import { HikingDetails } from './pages/HikingDetails';
import { Error } from './pages/Error';
import Footer from './components/ui/Footer';

const App = () => {

    return (
      <Router> 
        <Header />
        <ToastContainer />
        <Routes>          
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<Map />} />
          <Route path="/hikes" element={<HikesList />} />
          <Route path="/hikes/:id" element={<HikingDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    )
}

export default App;