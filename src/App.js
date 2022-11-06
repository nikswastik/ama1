import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup/Signup';
import Footer from './Pages/Footer/Footer';
import Signin from './Pages/SignIn/Signin';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Signup />} />
          <Route exact path="/signin" element={< Signin />} />
          <Route exact path="/home" element={< Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
