import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const ModalContainer = styled.div`
  background: ${cores.salmao};
  padding: 24px;

  max-width: 1024px;
  width: 100%;
  height: 344px;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  position: relative;
  img {
    width: 280px;
    height: 280px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 0px;
  background: none;
  color: white;
  border: none;

  cursor: pointer;
  font-size: 40px;
  font-weight: 100;

  &:hover {
    transform: scale(1.1);
    z-index: 10;
  }
`

export const BuyButton = styled.button`
  margin-bottom: 2px;
  font-size: 164x;
  font-weight: 700;
  background: ${cores.rosa_bebe};
  color: ${cores.salmao};

  padding: 4px 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.08);
    z-index: 10;
  }
`
export const Descricao = styled.div`
  flex: 1;
  min-width: 220px;
  color: ${cores.branco};

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin: 0 0 8px;

  }

  p {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;s
  }
`
