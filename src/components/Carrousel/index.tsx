import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper/modules'

import {
  Divider,
  Image,
  Overlay,
  SlideText,
  SlideWrapper,
  Wrapper
} from './styles'

import c1 from '../../assets/images/banana_.png'
import c2 from '../../assets/images/chihiro.png'
import c3 from '../../assets/images/demon.png'
import c4 from '../../assets/images/given.png'
import c5 from '../../assets/images/naruto.png'
import c6 from '../../assets/images/juju.png'
import c7 from '../../assets/images/one-piece.png'
import Button from '../Button'

const banners = [
  {
    src: c3,
    titulo: 'Demon Slayer',
    subtitulo:
      'Garanta os melhores artigos oficiais de Demon Slayer! Espadas, roupas e colecionáveis para você entrar na luta contra os demônios.',
    button: 'Ver a pagina',
    link: '/demon-slayer'
  },
  {
    src: c4,
    titulo: 'Given',
    subtitulo:
      'Para fãs de Given, temos tudo: pôsteres, camisetas e acessórios com o melhor do drama e da música do anime.',
    button: 'Ver a pagina',
    link: '/given'
  },
  {
    src: c5,
    titulo: 'Naruto',
    subtitulo:
      'Aventure-se com Naruto e amigos! Produtos incríveis para os ninjas de plantão, desde roupas até bonecos colecionáveis.',
    button: 'Ver a pagina',
    link: '/naruto'
  },
  {
    src: c6,
    titulo: 'Jujutsu Kaisen',
    subtitulo:
      'Capture a energia de Jujutsu Kaisen com nossos artigos oficiais — mochilas, figuras e mais para os amantes da ação sobrenatural.',
    button: 'Ver a pagina',
    link: '/jujutsu-kaisen'
  },
  {
    src: c7,
    titulo: 'One Piece',
    subtitulo:
      'Navegue com a tripulação do Chapéu de Palha! Itens exclusivos de One Piece para completar sua coleção de tesouros.',
    button: 'Ver a pagina',
    link: '/one-piece'
  }
]

const BannerCarousel = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideWrapper>
              <Overlay />
              <Image src={item.src} alt={`Banner ${index + 1}`} />
              <SlideText>
                <h2>{item.titulo}</h2>
                <Divider />
                <p>{item.subtitulo}</p>
              </SlideText>
              <Button
                type="link"
                to={item.link}
                title={`Veja mais sobre ${item.titulo}`}
                className="carousel-button"
              >
                {item.button}
              </Button>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}

export default BannerCarousel
