import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  color: ${cores.azul_escuro};
  border-radius: 8px;
  padding: 8px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size:
  display:block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 18px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Imagem = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 8px;
  display: block;
`
