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
  { title: 'Blusa Geto', description: 'R$ 79,99', image: Geto },
  { title: 'Figure Chopper', description: 'R$ 499,90', image: Chopper },
  { title: 'Blusa Given', description: 'R$ 69,90', image: Given1 },
  { title: 'Figure Inosuke', description: 'R$ 479,90', image: Inosuke }
]

const Novidades = () => (
  <>
    <section>
      <ProductsList
        title="Novidades"
        background="dark"
        titleColor="#d7e1fb"
        products={promocoes}
      />
    </section>
  </>
)

export default Novidades
