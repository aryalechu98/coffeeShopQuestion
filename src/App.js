import Container from '@mui/material/Container'

import Header from './components/Header';
import Specials from './components/Specials';
import PickYourCoffee from './components/pickcoffee/PickYourCoffee';

function App() {
  return (
    <Container>
     <Header/>
     <Specials/>
      <PickYourCoffee/>

    </Container>
  );
}

export default App;
