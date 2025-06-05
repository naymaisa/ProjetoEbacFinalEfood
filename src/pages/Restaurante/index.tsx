import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Produto } from '../../models/Produto'
import ProductModal from '../../components/ProductModal'
import HeroRestaurante from '../../components/HeroRestaurante'
import SidebarCart from '../../components/SidebarCart'
import { useGetRestauranteQuery } from '../../services/api'
import {
  Cardapio,
  Container,
  ProdutoCard,
  ProdutoImagem,
  ProdutoInfo,
  ProdutoTitulo,
  ProdutoDescricao,
  AdicionarButton
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { addToCart } from '../../store/reducers/cart'

const RestaurantePage = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetRestauranteQuery(id!)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )
  const [isCartOpen, setCartOpen] = useState(false)

  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  if (isLoading || !restaurante) return <p>Carregando restaurante...</p>

  return (
    <>
      <HeroRestaurante
        backgroundImage={restaurante.capa}
        titulo={restaurante.titulo}
        categoria={restaurante.tipo}
        produtosNoCarrinho={cartItems.length}
        abrirCarrinho={() => setCartOpen(true)}
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

      <SidebarCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

      {produtoSelecionado && (
        <ProductModal
          title={produtoSelecionado.nome}
          description={produtoSelecionado.descricao}
          image={produtoSelecionado.foto}
          porcao={produtoSelecionado.porcao}
          preco={produtoSelecionado.preco}
          onClose={() => setProdutoSelecionado(null)}
          onAddToCart={() => {
            dispatch(addToCart(produtoSelecionado))
            setProdutoSelecionado(null)
          }}
        />
      )}
    </>
  )
}

export default RestaurantePage
