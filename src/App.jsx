import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import HeaderMenu from './Components/HeaderMenu';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
  </Routes>
  );
}

export default App;
