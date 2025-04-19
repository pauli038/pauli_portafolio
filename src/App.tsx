import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-teal-700 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Maria Paula Fernandez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;