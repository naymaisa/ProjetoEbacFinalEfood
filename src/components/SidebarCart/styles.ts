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
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      padding: 10px;

      border: none;
      font-size: 14px;
    }
  }
`

export const CartTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  color: ${cores.rosa_bebe};
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
  background: ${cores.rosa_bebe};
  color: ${cores.salmao};
  border: none;
  font-size: 14px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${cores.salmao};
    color: white;
  }
`

export const FinalizeButton = styled.button`
  background: ${cores.rosa_bebe};
  color: ${cores.salmao};
  border: none;
  padding: 12px;
  font-size: 16px;

  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const Valor = styled.p`
  color: ${cores.rosa_bebe};
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`
export const Texto = styled.p`
  color: ${cores.rosa_bebe};
  font-weight: 700;
  font-size: 14px;
  display: flex;
  margin-top: 16px;
`
export const Preencher = styled.input`
  background-color: ${cores.rosa_bebe};
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-top: 12px;
  display: flex;
  gap: 6px;
  flex-direction: column;
  color: ${cores.rosa_bebe};
  min-width: 0;
`
export const Linha = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;

  ${Label} {
    flex: 1;
  }
`
export const Pagamento = styled.h3`
  font-weigth: 700;
  font-size: 16px;
  color: ${cores.rosa_bebe};
`
