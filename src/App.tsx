import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Home/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
