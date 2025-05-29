import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../../store/reducers/cart'
import {
  Overlay,
  CartContainer,
  CartItem,
  CartTitle,
  RemoveButton,
  FinalizeButton,
  Valor,
  Texto,
  Preencher,
  Label,
  Linha,
  Pagamento
} from './styles'
import { RootState } from '../../store'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const SidebarCart = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const total = items.reduce((acc, item) => acc + item.preco, 0).toFixed(2)

  const [step, setStep] = useState(1)
  const [deliveryData, setDeliveryData] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })
  const [paymentData, setPaymentData] = useState({
    name: '',
    number: '',
    code: '',
    expiresMonth: '',
    expiresYear: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [confirmacao, setConfirmacao] = useState<any>(null)

  if (!isOpen) return null

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryData({ ...deliveryData, [e.target.name]: e.target.value })
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            products: items.map((item: any) => ({
              id: item.id,
              price: item.preco
            })),
            delivery: {
              receiver: deliveryData.receiver,
              address: {
                description: deliveryData.address,
                city: deliveryData.city,
                zipCode: deliveryData.zipCode,
                number: Number(deliveryData.number),
                complement: deliveryData.complement
              }
            },
            payment: {
              card: {
                name: paymentData.name,
                number: paymentData.number,
                code: Number(paymentData.code),
                expires: {
                  month: Number(paymentData.expiresMonth),
                  year: Number(paymentData.expiresYear)
                }
              }
            }
          })
        }
      )
      if (!response.ok) throw new Error('Erro ao concluir pedido')
      const data = await response.json()
      setLoading(false)
      setConfirmacao(data)
      setStep(4)
      dispatch(clearCart())
    } catch (err: any) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <Overlay onClick={onClose}>
      <CartContainer onClick={(e) => e.stopPropagation()}>
        {step === 1 && (
          <>
            <CartTitle>Seu carrinho</CartTitle>
            <ul>
              {items.map((item: any) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <RemoveButton
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <i className="bi bi-trash"></i>
                  </RemoveButton>
                </CartItem>
              ))}
            </ul>
            <Valor>
              Total: <strong>R$ {total}</strong>
            </Valor>
            <FinalizeButton
              disabled={items.length === 0}
              onClick={() => setStep(2)}
            >
              Continuar com a entrega
            </FinalizeButton>
          </>
        )}

        {step === 2 && (
          <>
            <CartTitle>Entrega</CartTitle>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setStep(3)
              }}
            >
              <Label>
                Quem irá receber
                <Preencher
                  name="receiver"
                  required
                  value={deliveryData.receiver}
                  onChange={handleDeliveryChange}
                />
              </Label>
              <Label>
                Endereço
                <Preencher
                  name="address"
                  required
                  value={deliveryData.address}
                  onChange={handleDeliveryChange}
                />
              </Label>
              <Label>
                Cidade
                <Preencher
                  name="city"
                  required
                  value={deliveryData.city}
                  onChange={handleDeliveryChange}
                />
              </Label>
              <Linha>
                <Label>
                  CEP
                  <Preencher
                    name="zipCode"
                    required
                    value={deliveryData.zipCode}
                    onChange={handleDeliveryChange}
                  />
                </Label>
                <Label>
                  Número
                  <Preencher
                    name="number"
                    required
                    value={deliveryData.number}
                    onChange={handleDeliveryChange}
                  />
                </Label>
              </Linha>

              <Label>
                Complemento
                <Preencher
                  name="complement"
                  value={deliveryData.complement}
                  onChange={handleDeliveryChange}
                />
              </Label>
              <FinalizeButton type="submit">
                Continuar para pagamento
              </FinalizeButton>
            </form>
            <FinalizeButton onClick={() => setStep(1)}>
              Voltar para o carrinho
            </FinalizeButton>
          </>
        )}

        {step === 3 && (
          <>
            <Pagamento>
              {' '}
              Pagamento - Valor a pagar <strong>R$ {total}</strong>
            </Pagamento>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              <Label>
                Nome no cartão
                <Preencher
                  name="name"
                  required
                  value={paymentData.name}
                  onChange={handlePaymentChange}
                />
              </Label>
              <Linha>
                <Label style={{ flex: 2 }}>
                  Número do cartão
                  <Preencher
                    name="number"
                    required
                    value={paymentData.number}
                    onChange={handlePaymentChange}
                  />
                </Label>
                <Label style={{ flex: 1 }}>
                  CVV
                  <Preencher
                    name="code"
                    required
                    value={paymentData.code}
                    onChange={handlePaymentChange}
                  />
                </Label>
              </Linha>
              <Linha>
                <Label>
                  Mês de validade
                  <Preencher
                    name="expiresMonth"
                    required
                    value={paymentData.expiresMonth}
                    onChange={handlePaymentChange}
                  />
                </Label>
                <Label>
                  Ano de validade
                  <Preencher
                    name="expiresYear"
                    required
                    value={paymentData.expiresYear}
                    onChange={handlePaymentChange}
                  />
                </Label>
              </Linha>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <FinalizeButton type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Finalizar pedido'}
              </FinalizeButton>
            </form>
            <FinalizeButton onClick={() => setStep(2)}>
              Voltar para a edição de endereço
            </FinalizeButton>
          </>
        )}

        {step === 4 && confirmacao && (
          <>
            <CartTitle>Pedido confirmado!</CartTitle>
            <Texto>Pedido #{confirmacao.orderId} realizado com sucesso!</Texto>
            <Texto>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. Lembre-se da importância
              de higienizar as mãos após o recebimento do pedido, garantindo
              assim sua segurança e bem-estar durante a refeição. Esperamos que
              desfrute de uma deliciosa e agradável experiência gastronômica.
              Bom apetite!
            </Texto>
            <FinalizeButton onClick={onClose}>Concluir</FinalizeButton>
          </>
        )}
      </CartContainer>
    </Overlay>
  )
}

export default SidebarCart
