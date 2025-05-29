import { Container, FooterTop, FooterBottom, SocialIcons, Logo } from './styled'
import logo from '../../assets/images/logo2.2.png'
const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <FooterTop>
        <div>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/nayaramaisa">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/codandocomnay/">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@CodandocomNay">
              <i className="bi bi-youtube"></i>
            </a>

            <a href="https://www.tiktok.com/@codandocomnay">
              <i className="bi bi-tiktok"></i>
            </a>
          </SocialIcons>
        </div>
      </FooterTop>
      <FooterBottom>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade{' '}
        </p>
        <p>dos produtos é toda do estabelecimento contratado.</p>
      </FooterBottom>
    </div>
  </Container>
)

export default Footer
