import { HeaderBar, Links, LinkItem, Logo, LinkCart } from './styles'
import logo from '../../assets/images/logo2.2.png'
import { Link } from 'react-router-dom'
const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <Logo src={logo} alt="logo da empresa" />
      </Link>

      <nav>
        <Links>
          <LinkItem>
            <Link to="/promocoes">Promoções</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/novidades">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/mangas">Mangás</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/figure">Figures</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/roupas">Roupas</Link>
          </LinkItem>

          <LinkItem>
            <a href="#exclusivos">Exclusivos</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)<i className="bi bi-bag-heart-fill"></i>
    </LinkCart>
  </HeaderBar>
)

export default Header
