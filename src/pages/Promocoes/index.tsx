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
  { title: 'Blusa Luffy', description: 'R$ 79,99', image: BlusaLuffy },
  { title: 'Mangá One Piece #1', description: 'R$ 29,90', image: Manga1OP },
  { title: 'Blusa Given', description: 'R$ 69,90', image: Given1 },
  { title: 'Figure Inosuke', description: 'R$ 479,90', image: Inosuke }
]

const novidades = [
  { title: 'Figure Ash', description: 'R$ 655,80', image: Ash },
  { title: 'Figure Chopper', description: 'R$ 599,99', image: Chopper },
  { title: 'Blusa Geto', description: 'R$ 89,99', image: Geto },
  {
    title: '12 mini figures de Naruto',
    description: 'R$ 259,99',
    image: naruto2
  }
]

const Promocoes = () => (
  <>
    <section>
      <ProductsList
        title="Promoções"
        background="dark"
        titleColor="#d7e1fb"
        products={promocoes}
      />
    </section>
    <section>
      <ProductsList
        title=""
        background="dark"
        titleColor="#d7e1fb"
        products={novidades}
      />
    </section>
  </>
)

export default Promocoes
