import { Container, FooterTop, FooterBottom, SocialIcons } from './styled'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterTop>
        <div>
          <h4>Redes sociais</h4>
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
        <div>
          <h4>Localização</h4>
          <p>Rua Animes, nº2244, Bairro Japão - Belo Horizonte - MG</p>
          <p>(31)9**34-234*</p>
        </div>
      </FooterTop>
      <FooterBottom>
        <p>2025 - &copy; Akihabara Todos os direitos reservados</p>
      </FooterBottom>
    </div>
  </Container>
)

export default Footer
