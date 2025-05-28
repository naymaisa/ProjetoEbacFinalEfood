import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss, Container } from './styles'

import Footer from './components/Footer'
import RestaurantePage from './pages/Restaurante'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantePage />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Rotas />
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
