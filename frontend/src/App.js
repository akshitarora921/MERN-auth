import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import PrivateRoute from "./auth/PrivateRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <UserInfo />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
