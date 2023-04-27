import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar, Container, Home, Completed } from './components/index';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Container>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/completed" element={<Completed />}/>
      </Routes>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
