
import './App.css';
import Navbar from '../src/components/navbar/navbar.jsx';  // Import the Navbar component
import Footer from '../src/components/footer/footer.jsx'; 
import Hero from '../src/components/hero/hero.jsx'; 
import Cards from '../src/components/cards/cards.jsx'; 

function App() {
  return (
    <div className="App">
         <Navbar />
         <Hero />
         <Cards />
         <Footer />
    </div>
  );
}

export default App;
