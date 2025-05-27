import BlusaLuffy from '../../assets/images/blusaone3.png'
import BlusaJUJU from '../../assets/images/blusajuju1.png'
import BluseOne from '../../assets/images/blusaone3.png'
import Chopper from '../../assets/images/onef2.png'
import Given1 from '../../assets/images/given1.png'
import Geto from '../../assets/images/geto1.png'
import One2 from '../../assets/images/blusaone4.png'
import naruto1 from '../../assets/images/naruto3.png'
import naruto2 from '../../assets/images/narutof.png'

import BannerCarousel from '../../components/Carrousel'
import ProductsList from '../../components/ProductsList'

const promocoes = [
  { title: 'Blusa Luffy', description: 'R$ 79,99', image: BlusaLuffy },
  { title: 'Blusa Jujutsu Kaisen', description: 'R$ 29,90', image: BlusaJUJU },
  { title: 'Blusa Given', description: 'R$ 69,90', image: Given1 },
  { title: 'Blusa One Piece', description: 'R$ 479,90', image: BluseOne }
]

const novidades = [
  { title: 'Blusa Geto', description: 'R$ 89,99', image: Geto },

  { title: 'Blusa Naruto', description: 'R$ 89,99', image: naruto1 }
]

const Roupas = () => (
  <>
    <section>
      <ProductsList
        title="Roupas"
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

export default Roupas
