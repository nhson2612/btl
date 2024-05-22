import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Speaking from './components/Speaking';
import Rank from './components/Rank';
import Mission from './components/Mission';
import Profile from './components/Profile';
import Login from './pages/Login';
import SignUp from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './ProtectedRoute';
import LayOut from './layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <LayOut>
        <Routes>
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/speaking" element={
            <ProtectedRoute>
              <Speaking />
            </ProtectedRoute>
          } />
          <Route path="/rank" element={
            <ProtectedRoute>
              <Rank />
            </ProtectedRoute>
          } />
          <Route path="/mission" element={
            <ProtectedRoute>
              <Mission />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </LayOut>
    </div>
  );
}

export default App;
