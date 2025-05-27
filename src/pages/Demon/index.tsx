import FigureLuffy from '../../assets/images/demon4.webp'
import Manga1OP from '../../assets/images/demon2.png'
import Chopper from '../../assets/images/DemonManga.png'
import Given1 from '../../assets/images/demon4.webp'
import Geto from '../../assets/images/geto1.png'

import naruto1 from '../../assets/images/naruto3.png'
import naruto2 from '../../assets/images/narutof.png'
import Ash from '../../assets/images/ash1.png'
import ProductsList from '../../components/ProductsList'

const promocoes = [
  { title: 'Kimono', description: 'R$ 69,90', image: Manga1OP },
  { title: 'Figure Rengoku', description: 'R$ 659,90', image: Given1 },
  { title: 'Manga Demon Slayer', description: 'R$ 59,90', image: Chopper }
]

const Demon = () => (
  <>
    <ProductsList
      title="Demon Slayer"
      background="dark"
      titleColor="#d7e1fb"
      products={promocoes}
    />
  </>
)

export default Demon
