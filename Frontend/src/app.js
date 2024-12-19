import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/ui/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Map } from './pages/Map';
import { HikesList } from './pages/HikesList';
import { HikingDetails } from './pages/HikingDetails';
import { Contact } from './pages/Contact';
import { Error } from './pages/Error';
import Footer from './components/ui/Footer';

const App = () => {

    return (
      <Router> 
        <Header />
        <ToastContainer autoClose={2000} position="top-center" />
        <Routes>          
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/map" element={<Map />} />
          <Route path="/hikes" element={<HikesList />} />
          <Route path="/hikes/:id" element={<HikingDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    )
}

export default App;