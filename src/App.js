import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import PricePage from './pages/PricePage/PricePage';
import FAQPage from './pages/FAQPage/FAQPage';
import TeamPage from './pages/TeamPage/TeamPage';
import ContactPage from './pages/ContactPage/ContactPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/price' element={<PricePage />} />
        <Route path='/about-us' element={<TeamPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    </Routes>

  );
}

export default App;
