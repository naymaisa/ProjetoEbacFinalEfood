import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.azul_escuro};
  color: ${cores.azul_escuro};
  background-color: ${cores.azul_cinza};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  bottom: 20px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.azul_escuro};
  border-radius: 4px;
  color: ${cores.azul_escuro};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  z-index: 3;

  &.carousel-button {
    right: 60px;
    bottom: 30px;
  }
`
