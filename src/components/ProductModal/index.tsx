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
              width: '280px',
              maxHeight: '100%',
              objectFit: 'cover'
            }}
          />

          <Descricao>
            <h2>{title}</h2>
            <p>{description}</p>
            <br />
            <p>Serve: {porcao}</p>

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
