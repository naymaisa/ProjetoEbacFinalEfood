import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import topoPattern from '../../assets/images/fundo.png'

export const Wrapper = styled.header``

export const TopBackground = styled.div`
  background-image: url(${topoPattern});
  background-repeat: repeat;
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 80px;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`

export const Logo = styled.img`
  height: 56px;
`

export const Button = styled(Link)`
  font-size: 18px;
  color: ${cores.salmao};
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export const HeroImage = styled.div<{ background: string }>`
  height: 280px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  position: relative;

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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 80px;
  color: white;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`

export const Categoria = styled.h4`
  font-size: 32px;
  font-weight: 100;
  margin: 0 0 16px;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-top: 140px;
`
