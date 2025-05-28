import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.rosa_bebe};
  color: ${cores.branco};
  background-color: ${cores.rosa_bebe};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  bottom: 20px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.salmao};
  border-radius: 4px;
  color: ${cores.rosa_bebe};
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
  &:hover {
    color: ${cores.rosa_bebe};
    background-color: ${cores.salmao};
  }
`
