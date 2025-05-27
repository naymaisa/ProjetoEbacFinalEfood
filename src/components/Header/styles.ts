import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: ${cores.azul_escuro};
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
  }
  div {
    display: flex;
    align-items: center
`
export const Logo = styled.img`
  height: 70px;
  width: auto;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 24px;
`
export const LinkCart = styled.a`
  display: flex;

  i {
    margin-left: 16px;
  }
`
