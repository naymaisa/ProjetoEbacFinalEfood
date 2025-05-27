import Banana from '../../assets/images/BananaFishVol1.png'
import Demon from '../../assets/images/DemonManga.png'
import Manga1OP from '../../assets/images/one1.png'
import Given from '../../assets/images/GIvenManga.jpg'
import Juju1 from '../../assets/images/JujutsuManga.png'
import Juju2 from '../../assets/images/JujutsuManga1.png'
import Naruto1 from '../../assets/images/NarutoMAnga1.png'
import naruto1 from '../../assets/images/NarutoManga.jpg'
import One from '../../assets/images/on2.png'
import One1 from '../../assets/images/one4.png'
import ProductsList from '../../components/ProductsList'

const promocoes = [
  { title: 'Banana Fish #1', description: 'R$ 79,99', image: Banana },
  { title: 'Mangá One Piece #1', description: 'R$ 29,90', image: Manga1OP },
  { title: 'Jujutso Kaisen #1', description: 'R$ 69,90', image: Juju1 },
  { title: 'Naruto', description: 'R$ 479,90', image: Naruto1 }
]

const novidades = [
  { title: 'Demon Slayer #1', description: 'R$ 655,80', image: Demon },
  { title: 'Given #6 ', description: 'R$ 599,99', image: Given },
  { title: 'Jujutso Kaisen #21', description: 'R$ 89,99', image: Juju2 },
  {
    title: 'One Piece',
    description: 'R$ 259,99',
    image: One1
  }
]

const exclusivos = [
  { title: 'Blusa Naruto', description: 'R$ 89,99', image: naruto1 },
  { title: 'One Piece', description: 'R$ 559,99', image: One }
]

const Manga = () => (
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
    <ProductsList
      title=""
      background="dark"
      titleColor="#d7e1fb"
      products={exclusivos}
    />
  </>
)

export default Manga
