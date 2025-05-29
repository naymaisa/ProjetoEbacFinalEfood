import {
  Overlay,
  ModalContainer,
  CloseButton,
  BuyButton,
  Descricao
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  porcao: string
  preco: number
  onClose: () => void
  onAddToCart: () => void
}

const ProductModal = ({
  title,
  description,
  image,
  porcao,
  preco,
  onClose,
  onAddToCart
}: Props) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <img
            src={image}
            alt={title}
            style={{
              width: '260px',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />

          <Descricao style={{ flex: 1, minWidth: '220px' }}>
            <h2 style={{ margin: '0 0 8px' }}>{title}</h2>
            <p style={{ marginBottom: '16px' }}>{description}</p>
            <p style={{ fontWeight: 'bold', marginBottom: '24px' }}>
              Serve: {porcao}
            </p>

            <BuyButton onClick={onAddToCart}>
              Adicionar ao carrinho - R$ {preco.toFixed(2)}
            </BuyButton>
          </Descricao>
        </div>
      </ModalContainer>
    </Overlay>
  )
}

export default ProductModal
