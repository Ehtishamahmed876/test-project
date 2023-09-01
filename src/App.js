
import Navbar from './components/Navbar';
import './App.css';
import TwoDivsWithContent from './components/SecondComponent';
import SelectedProducts from './components/Products';


function App() {
  return (
    <>
    <Navbar />
    <TwoDivsWithContent />
    <SelectedProducts />
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  </>

  );
}

export default App;
