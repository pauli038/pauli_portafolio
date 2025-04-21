import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Toaster } from "sonner";
import { useTranslation } from 'react-i18next';
import Experience from './components/Experience';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-teal-700 dark:bg-teal-900 text-white py-6 transition-colors">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Maria Paula Fernandez. {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;