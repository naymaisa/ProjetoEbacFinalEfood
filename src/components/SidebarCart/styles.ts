import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`

export const CartContainer = styled.div`
  width: 360px;
  background: ${cores.salmao};
  padding: 12px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const CartTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  background: ${cores.rosa_bebe};
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 8px;
  }

  div {
    flex: 1;
  }

  h4 {
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    margin: 0 0 4px;
    font-size: 14px;
    font-weight: 400;
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  color: ${cores.salmao};
  border: none;
  font-size: 14px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const FinalizeButton = styled.button`
  background: ${cores.rosa_bebe};
  color: ${cores.salmao};
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: auto;
`
export const Valor = styled.p`
  color: ${cores.rosa_bebe};
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`
