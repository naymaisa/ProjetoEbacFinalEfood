import BlusaLuffy from '../../assets/images/blusaone3.png'
import FigureLuffy from '../../assets/images/onef.png'
import Manga1OP from '../../assets/images/one1.png'
import Chopper from '../../assets/images/onef2.png'
import Given1 from '../../assets/images/given1.png'
import Geto from '../../assets/images/geto1.png'
import Inosuke from '../../assets/images/inosuke.png'
import naruto1 from '../../assets/images/naruto3.png'
import naruto2 from '../../assets/images/narutof.png'
import Ash from '../../assets/images/ash1.png'
import BannerCarousel from '../../components/Carrousel'
import ProductsList from '../../components/ProductsList'

const promocoes = [
  { title: 'Figure Inosuke', description: 'R$ 479,90', image: Inosuke },
  { title: 'Figure Luffy', description: 'R$ 655,80', image: FigureLuffy },
  { title: 'Figure Chopper', description: 'R$ 599,99', image: Chopper },
  {
    title: '12 mini figures de Naruto',
    description: 'R$ 259,99',
    image: naruto2
  }
]

const exclusivos = [
  { title: 'Figure Ash', description: 'R$ 559,99', image: Ash }
]

const Figure = () => (
  <>
    <ProductsList
      title="Action Figure"
      background="dark"
      titleColor="#d7e1fb"
      products={promocoes}
    />

    <ProductsList
      title=""
      background="dark"
      titleColor="#d7e1fb"
      products={exclusivos}
    />
  </>
)

export default Figure
