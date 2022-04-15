import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';
import PlantDetailContainer from './components/PlantDetailContainer';
import CartDetail from './components/CartDetail';
import Profile from './components/Profile';
import './App.css';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='plant/:id' element={<PlantDetailContainer />} />
        <Route path='cart' element={<CartDetail />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
