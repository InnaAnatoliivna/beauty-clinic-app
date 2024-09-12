import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import PricePage from './pages/PricePage/PricePage';
import VoucherPage from './pages/VoucherPage/VoucherPage';
import TeamPage from './pages/TeamPage/TeamPage';
import ContactPage from './pages/ContactPage/ContactPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/price' element={<PricePage />} />
        <Route path='/voucher' element={<VoucherPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    </Routes>

  );
}

export default App;
