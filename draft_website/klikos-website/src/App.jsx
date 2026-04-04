import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Services />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
