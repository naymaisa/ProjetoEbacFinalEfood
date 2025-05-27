import Product from '../Product'
import { TituloLista, List, Container } from './styles'
import BlusaLuffy from '../../assets/images/blusaone3.png'
import FigureLuffy from '../../assets/images/onef.png'
import Manga1OP from '../../assets/images/one1.png'
import Chopper from '../../assets/images/onef2.png'
import Produto from '../../models/Produto'

type Props = {
  title: string
  background: 'light' | 'dark'
  titleColor?: string
  products: Produto[]
}

const ProductList = ({ title, titleColor, products }: Props) => (
  <Container>
    <TituloLista color={titleColor}>{title}</TituloLista>
    <List>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </List>
  </Container>
)
export default ProductList
