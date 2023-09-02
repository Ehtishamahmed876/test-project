
import Navbar from './components/Navbar';
import './App.css';
import TwoDivsWithContent from './components/SecondComponent';
import SelectedProducts from './components/Products';
import WhyChooseUs from './components/ChooseUs';
import NewProducts from './components/NewProducts';
import BackImg from './components/BackImg';
import Clients from './components/Clients';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <TwoDivsWithContent />
    <SelectedProducts />
    <WhyChooseUs />
    <NewProducts />
    <BackImg />
    <Clients />
    <Footer />

  </>

  );
}

export default App;
