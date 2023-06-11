import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar, Container, Home} from './components/index';
import Login from './pages/Login'
import Register from './pages/Register';


function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Login />}/>
                    <Route exact path="/register" element={<Register />}/>
                    <Route exact path="/tasks" element={<Home />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    </>
  );
}

export default App;
