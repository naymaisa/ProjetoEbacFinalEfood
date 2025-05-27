import { type } from 'os'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Imagem } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
