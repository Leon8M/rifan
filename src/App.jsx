import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


function App() {
  return (
    <div className="bg-neutral-dark text-body font-body">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-fluid"></div>

      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
