import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="ambient-blob w-96 h-96 bg-blue-200 rounded-full top-[-10%] left-[-10%] animate-pulse-slow"></div>
        <div className="ambient-blob w-125 h-125 bg-indigo-100 rounded-full bottom-[-10%] right-[-10%]"></div>
        <div className="ambient-blob w-64 h-64 bg-cyan-100 rounded-full top-[40%] right-[10%] animate-float"></div>
      </div>
      
      <div className="layout-container flex h-full grow flex-col relative z-10">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Hero />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
