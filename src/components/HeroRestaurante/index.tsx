import { Link } from 'react-router-dom'
import {
  Wrapper,
  TopBackground,
  TopBar,
  Logo,
  Button,
  HeroImage,
  HeroContent,
  Categoria,
  Titulo
} from './styled'

import logo from '../../assets/images/logo2.2.png'

type Props = {
  backgroundImage: string
  titulo: string
  categoria: string
  produtosNoCarrinho: number
}

const HeroRestaurante = ({
  backgroundImage,
  titulo,
  categoria,
  produtosNoCarrinho
}: Props) => {
  return (
    <Wrapper>
      <TopBackground>
        <TopBar>
          <Button to="/">Restaurantes</Button>
          <Logo src={logo} alt="eFood" />
          <Button to="/carrinho">
            {produtosNoCarrinho} produto(s) no carrinho
          </Button>
        </TopBar>
      </TopBackground>

      <HeroImage background={backgroundImage}>
        <HeroContent>
          <Categoria>{categoria}</Categoria>
          <Titulo>{titulo}</Titulo>
        </HeroContent>
      </HeroImage>
    </Wrapper>
  )
}

export default HeroRestaurante
