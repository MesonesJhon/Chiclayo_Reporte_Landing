import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Roles } from './components/Roles';
import { Technologies } from './components/Technologies';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Features />
      <Roles />
      <Technologies />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

