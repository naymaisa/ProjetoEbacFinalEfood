import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const ModalContainer = styled.div`
  background: ${cores.salmao};
  padding: 24px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  &:hover {
    transform: scale(1.1);
    z-index: 10;
  }
`

export const BuyButton = styled.button`
  margin-top: 16px;
  font-size: 16px;
  background: ${cores.rosa_bebe};
  color: ${cores.salmao};
  border-radius: 8px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.08);
    z-index: 10;
  }
`
