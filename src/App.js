import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import PricePage from './pages/PricePage/PricePage';
import FAQPage from './pages/FAQPage/FAQPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ServiceDescription from './pages/ServicesPage/ServiceDescription/ServiceDescription';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ScrollRefresh from './components/ScrollRefresh/ScrollRefresh';

function App() {
  return (
    <>
      <ScrollRefresh />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path='zabiegi' element={<ServicesPage />} />
          <Route path='zabiegi/:id' element={<ServiceDescription />} />
          <Route path='cennik' element={<PricePage />} />
          <Route path='o-nas' element={<AboutUsPage />} />
          <Route path='pytania-i-odpowiedzi' element={<FAQPage />} />
          <Route path='kontakt' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
