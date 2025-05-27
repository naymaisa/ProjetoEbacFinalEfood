import BlusaLuffy from '../../assets/images/juju.png'
import FigureLuffy from '../../assets/images/juju2.png'
import Manga1OP from '../../assets/images/JujutsuManga.png'
import Chopper from '../../assets/images/JujutsuManga1.png'

import Geto from '../../assets/images/geto1.png'

import ProductsList from '../../components/ProductsList'

const promocoes = [
  { title: 'Jujutsu-Kaisen #1', description: 'R$ 29,90', image: Manga1OP },
  { title: 'Blusa Geto Roxa', description: 'R$ 655,80', image: FigureLuffy },
  { title: 'Jujutsu-Kaisen #21', description: 'R$ 599,99', image: Chopper },
  { title: 'Blusa Geto', description: 'R$ 89,99', image: Geto }
]

const Juju = () => (
  <>
    <ProductsList
      title="Jujutsu-Kaisen"
      background="dark"
      titleColor="#d7e1fb"
      products={promocoes}
    />
  </>
)

export default Juju
