import {
  Container,
  Titulo,
  Voltar,
  CarrinhoInfo,
  ConteudoCentralizado
} from './styles'
import { useNavigate } from 'react-router-dom'
import React from 'react'

type Props = {
  backgroundImage?: string
  backgroundColor?: string
  categoria?: string
  titulo?: string
  exibirVoltar?: boolean
  exibirCarrinho?: boolean
  produtosNoCarrinho?: number
  children?: React.ReactNode
}

const Hero = ({
  backgroundImage,
  backgroundColor = '#ffebf0',
  categoria,
  titulo,
  exibirVoltar = false,
  exibirCarrinho = false,
  produtosNoCarrinho = 0,
  children
}: Props) => {
  const navigate = useNavigate()

  return (
    <Container
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundImage ? 'transparent' : backgroundColor
      }}
    >
      {categoria && <span>{categoria}</span>}
      {titulo && <Titulo>{titulo}</Titulo>}
      {children && <ConteudoCentralizado>{children}</ConteudoCentralizado>}
      {exibirVoltar && (
        <Voltar onClick={() => navigate('/')}>← Restaurantes</Voltar>
      )}
      {exibirCarrinho && (
        <CarrinhoInfo>{produtosNoCarrinho} produto(s) no carrinho</CarrinhoInfo>
      )}
    </Container>
  )
}

export default Hero
