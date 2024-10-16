import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

const SharedLayout = React.lazy(() => import('./components/SharedLayout/SharedLayout'));
const MainPage = React.lazy(() => import('./pages/MainPage/MainPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage/ServicesPage'));
const PricePage = React.lazy(() => import('./pages/PricePage/PricePage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage/FAQPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage/ContactPage'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage/AboutUsPage'));
const ServiceDescription = React.lazy(() => import('./pages/ServicesPage/ServiceDescription/ServiceDescription'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const ScrollRefresh = React.lazy(() => import('./components/ScrollRefresh/ScrollRefresh'));

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
