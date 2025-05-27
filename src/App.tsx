import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import Home from './pages/Home'
import Mangas from './pages/Mangas'
import Figure from './pages/Figure'
import Roupas from './pages/Roupas'
import Novidades from './pages/Novidades'
import Promocoes from './pages/Promocoes'
import Demon from './pages/Demon'
import Given from './pages/Given'
import Naruto from './pages/Naruto'
import Juju from './pages/Jujutsu'
import One from './pages/One'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/mangas" element={<Mangas />} />
    <Route path="/figure" element={<Figure />} />
    <Route path="/roupas" element={<Roupas />} />
    <Route path="/novidades" element={<Novidades />} />
    <Route path="/promocoes" element={<Promocoes />} />
    <Route path="/demon-slayer" element={<Demon />} />
    <Route path="/given" element={<Given />} />
    <Route path="/naruto" element={<Naruto />} />
    <Route path="/jujutsu-kaisen" element={<Juju />} />
    <Route path="/one-piece" element={<One />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
        <Rotas />
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
