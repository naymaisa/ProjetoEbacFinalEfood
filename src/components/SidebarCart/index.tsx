import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart, clearCart } from '../../store/reducers/cart'
import {
  Overlay,
  CartContainer,
  CartItem,
  CartTitle,
  RemoveButton,
  FinalizeButton,
  Valor
} from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const SidebarCart = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const total = items.reduce((acc, item) => acc + item.preco, 0)

  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <CartContainer onClick={(e) => e.stopPropagation()}>
        <CartTitle>Seu carrinho</CartTitle>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>R$ {item.preco.toFixed(2)}</p>
              </div>
              <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
                <i className="bi bi-trash"></i>
              </RemoveButton>
            </CartItem>
          ))}
        </ul>

        <Valor>
          <span>Valor Total:</span>
          <strong>R$ {total.toFixed(2)}</strong>
        </Valor>

        <FinalizeButton
          onClick={() => {
            alert('Compra finalizada!')
            dispatch(clearCart())
            onClose()
          }}
        >
          Continuar com a entrega
        </FinalizeButton>
      </CartContainer>
    </Overlay>
  )
}

export default SidebarCart
