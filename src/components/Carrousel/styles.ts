import styled from 'styled-components'
import { cores } from '../../styles'

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;

  .swiper-pagination {
    position: absolute;
    bottom: 15px;
    text-align: center;
    width: 100%;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: ${cores.azul_claro}
    opacity: 1;
    margin: 0 6px;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  .swiper-pagination-bullet-active {
    background-color:${cores.azul_escuro}
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(154, 208, 249, 0.53);
  border-radius: 16px;
`

export const SlideText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: ${cores.azul_escuro};

  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 24px;
    margin-top: 8px;
    font-weight: bold;
  }
`

export const Divider = styled.div`
  height: 2px;
  width: 60%;
  background-color: ${cores.azul_escuro};
  margin: 16px auto;
  border-radius: 1px;
`
