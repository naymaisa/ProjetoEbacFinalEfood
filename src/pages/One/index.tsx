import BlusaLuffy from '../../assets/images/blusaone3.png'
import FigureLuffy from '../../assets/images/onef.png'
import Manga1OP from '../../assets/images/one1.png'
import Chopper from '../../assets/images/onef2.png'
import Given1 from '../../assets/images/one-piece.png'
import Geto from '../../assets/images/on2.png'
import Inosuke from '../../assets/images/one1.png'
import naruto1 from '../../assets/images/onef3.png'
import naruto2 from '../../assets/images/onef1.png'

import ProductsList from '../../components/ProductsList'

const promocoes = [
  { title: 'Blusa Luffy', description: 'R$ 79,99', image: BlusaLuffy },
  { title: 'Mangá One Piece #1', description: 'R$ 29,90', image: Manga1OP },
  { title: 'Figure Zoro', description: 'R$ 589,99', image: naruto1 },
  {
    title: 'Figure Usopp',
    description: 'R$ 359,99',
    image: naruto2
  }
]

const novidades = [
  { title: 'Figure Luffy', description: 'R$ 655,80', image: FigureLuffy },
  { title: 'Figure Chopper', description: 'R$ 599,99', image: Chopper },
  { title: 'Mangá One Piece #', description: 'R$ 89,99', image: Geto }
]

const One = () => (
  <>
    <ProductsList
      title="Mangás"
      background="dark"
      titleColor="#d7e1fb"
      products={promocoes}
    />
    <ProductsList
      title=""
      background="dark"
      titleColor="#d7e1fb"
      products={novidades}
    />
  </>
)

export default One
