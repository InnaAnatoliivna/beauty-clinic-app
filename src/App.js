// import { Navigate, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/' element={<MainPage />} />
      </Route>
    </Routes>

  );
}

export default App;
