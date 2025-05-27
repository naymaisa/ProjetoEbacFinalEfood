import styled from 'styled-components'

export const TituloLista = styled.h2<{ color?: string }>`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 54px;
  color: ${(props) => props.color || ' black'};
`
export const Container = styled.section`
  margin-bottom: 32px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
`
