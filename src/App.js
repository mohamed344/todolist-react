import './App.css';

import { Navbar, Container, AddItem ,ListItem } from './components/index';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AddItem />
        <ListItem />
      </Container>
    </>
  );
}

export default App;
