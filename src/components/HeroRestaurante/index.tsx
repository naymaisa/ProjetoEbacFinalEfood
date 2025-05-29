import {
  Wrapper,
  TopBackground,
  TopBar,
  Logo,
  Button,
  HeroImage,
  HeroContent,
  Categoria,
  Titulo,
  ButtonLink
} from './styled'
import logo from '../../assets/images/logo2.2.png'

type Props = {
  backgroundImage: string
  titulo: string
  categoria: string
  produtosNoCarrinho: number
  abrirCarrinho: () => void
}

const HeroRestaurante = ({
  backgroundImage,
  titulo,
  categoria,
  produtosNoCarrinho,
  abrirCarrinho
}: Props) => {
  return (
    <Wrapper>
      <TopBackground>
        <TopBar>
          <ButtonLink to="/">Restaurantes</ButtonLink>
          <Logo src={logo} alt="eFood" />
          <Button onClick={abrirCarrinho}>
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
