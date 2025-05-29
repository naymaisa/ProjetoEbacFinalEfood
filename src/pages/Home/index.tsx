import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Restaurante } from '../../models/Produto'
import {
  Container,
  RestauranteGrid,
  RestauranteCard,
  Capa,
  Conteudo,
  Titulo,
  Descricao,
  Nota,
  SaibaMais,
  Tag,
  Logo
} from './styles'
import Hero from '../../components/Hero'
import logo from '../../assets/images/logo2.2.png'
import bgHero from '../../assets/images/fundo.png'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then(setRestaurantes)
      .catch(console.error)
  }, [])

  return (
    <>
      <Hero backgroundImage={bgHero}>
        <Logo src={logo} alt="efood" />
        <h2>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </h2>
      </Hero>

      <Container>
        <RestauranteGrid>
          {restaurantes.map((restaurante) => (
            <RestauranteCard key={restaurante.id}>
              <Capa src={restaurante.capa} alt={restaurante.titulo} />
              <Tag>{restaurante.tipo}</Tag>
              <Conteudo>
                <div className="linhaTituloNota">
                  <Titulo>{restaurante.titulo}</Titulo>
                  <Nota>
                    <span className="numero">
                      {restaurante.avaliacao.toFixed(1)}
                    </span>
                    <span className="estrela"> ★</span>
                  </Nota>
                </div>

                <Descricao>{restaurante.descricao}</Descricao>
                <SaibaMais
                  onClick={() => navigate(`/restaurante/${restaurante.id}`)}
                >
                  Saiba mais
                </SaibaMais>
              </Conteudo>
            </RestauranteCard>
          ))}
        </RestauranteGrid>
      </Container>
    </>
  )
}

export default Home
