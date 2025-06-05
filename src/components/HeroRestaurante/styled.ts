import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import topoPattern from '../../assets/images/fundo.png'

export const Wrapper = styled.header``

export const TopBackground = styled.div`
  background-image: url(${topoPattern});
  background-repeat: repeat;
  height: 186px;
`

export const TopBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`

export const Logo = styled.img`
  height: 56px;
  width: 125px;
  margin-top: 40px;
`

export const ButtonLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  line-height: 100%;
  color: ${cores.salmao};
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 59px;
  margin-left: 0px;
  x &:hover {
    text-decoration: underline;
  }
`

export const Button = styled.button`
  font-size: 18px;
  font-weight: 900;
  line-height: 100%;
  color: ${cores.salmao};
  background: none;
  border: none;
  cursor: pointer;
  justify-self: end;
  margin-top: 59px;

  &:hover {
    text-decoration: underline;
  }
`

export const HeroImage = styled.div<{ background: string }>`
  height: 300px;
  width: 100%;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1024px;
  margin: 0 auto;

  color: white;
`

export const Categoria = styled.h4`
  font-size: 32px;
  font-weight: 100;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-top: 180px;
`
