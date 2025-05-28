import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante, Produto } from '../../models/Produto'
import ProductModal from '../../components/ProductModal'
import {
  Banner,
  Cardapio,
  Container,
  ProdutoCard,
  ProdutoImagem,
  ProdutoInfo,
  ProdutoTitulo,
  ProdutoDescricao,
  AdicionarButton
} from './styles'
import Hero from '../../components/Hero'
import bgHero from '../../assets/images/bg-hero.png'

const RestaurantePage = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then(setRestaurante)
  }, [id])

  if (!restaurante) return <p>Carregando restaurante...</p>

  return (
    <>
      <Hero
        backgroundImage={restaurante.capa}
        titulo={restaurante.titulo}
        exibirVoltar
        exibirCarrinho
        produtosNoCarrinho={2}
      />

      <Container>
        <Cardapio>
          {restaurante.cardapio.map((produto: Produto) => (
            <ProdutoCard key={produto.id}>
              <ProdutoImagem src={produto.foto} alt={produto.nome} />
              <ProdutoInfo>
                <ProdutoTitulo>{produto.nome}</ProdutoTitulo>
                <ProdutoDescricao>{produto.descricao}</ProdutoDescricao>
                <AdicionarButton onClick={() => setProdutoSelecionado(produto)}>
                  Adicionar ao carrinho
                </AdicionarButton>
              </ProdutoInfo>
            </ProdutoCard>
          ))}
        </Cardapio>
      </Container>
      {produtoSelecionado && (
        <ProductModal
          title={produtoSelecionado.nome}
          description={produtoSelecionado.descricao}
          image={produtoSelecionado.foto}
          onClose={() => setProdutoSelecionado(null)}
          onAddToCart={() => {
            alert(`${produtoSelecionado.nome} adicionado ao carrinho!`)
            setProdutoSelecionado(null)
          }}
        />
      )}
    </>
  )
}

export default RestaurantePage
