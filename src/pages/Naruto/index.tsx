import BlusaLuffy from '../../assets/images/NarutoMAnga1.png'
import BlusaLuffy2 from '../../assets/images/NarutoManga.jpg'

import naruto1 from '../../assets/images/naruto3.png'
import naruto2 from '../../assets/images/narutof.png'

import ProductsList from '../../components/ProductsList'

const promocoes = [
  { title: 'Blusa Naruto', description: 'R$ 79,99', image: naruto1 },
  {
    title: '12 mini figures de Naruto',
    description: 'R$ 249,90',
    image: naruto2
  },
  { title: 'Naruto', description: 'R$ 69,90', image: BlusaLuffy },
  { title: 'Naruto', description: 'R$ 49,90', image: BlusaLuffy2 }
]

const Naruto = () => (
  <>
    <ProductsList
      title="Naruto"
      background="dark"
      titleColor="#d7e1fb"
      products={promocoes}
    />
  </>
)

export default Naruto
