import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Groups from './pages/Groups';
import LoginPage from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/groups/:gameName" element={<Groups />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
  );
}

export default App;