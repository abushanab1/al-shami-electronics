import Navbar from './components/Navbar'
import Home from './sections/Home'
import Services from './sections/Services'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Home />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
