import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.header`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${cores.branco};
  text-align: center;

  span {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin: 0;
`

export const Voltar = styled.button`
  position: absolute;
  top: 24px;
  left: 32px;
  background: none;
  border: none;
  color: ${cores.branco};
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export const CarrinhoInfo = styled.div`
  position: absolute;
  top: 24px;
  right: 32px;
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branco};
`

export const ConteudoCentralizado = styled.div`
  margin-top: 24px;
`
