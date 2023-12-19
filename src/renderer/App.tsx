/* eslint-disable no-use-before-define */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Die } from './Die';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Die />} />
      </Routes>
    </Router>
  );
}
