/* eslint-disable no-use-before-define */
import { Routes, Route } from 'react-router-dom';
import { Die } from './pages/Die';
import Menu from './components/Menu';
import Meditation from './pages/Meditation';
import './App.css';

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Die />} />
        <Route path="/meditations" element={<Meditation />} />
        <Route path="/*" element={<Die />} />
      </Routes>
    </>
  );
}
