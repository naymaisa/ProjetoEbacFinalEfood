import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 80%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 32px;
  }

  h2 {
    font-size: 28px;
    margin: 0;
  }

  span {
    font-size: 14px;
    opacity: 0.85;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
`

export const Cardapio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
`

export const ProdutoCard = styled.div`
  background: ${cores.salmao};

  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`
export const ProdutoImagem = styled.img`
  width: 90%;
  height: 160px;
  object-fit: cover;
  margin: 16px auto 0 auto;
  background-color: white;
`

export const ProdutoInfo = styled.div`
  padding: 14px;
`

export const ProdutoTitulo = styled.h3`
  font-size: 16px;
  color: ${cores.branco};

  margin-bottom: 8px;
`

export const ProdutoDescricao = styled.p`
  font-size: 14px;
  color: ${cores.branco};
  margin-bottom: 12px;
`

export const AdicionarButton = styled.button`
  background-color: ${cores.rosa_bebe};
  color: ${cores.salmao};
  border: none;
  padding: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 8px 4px 8px;
  width: calc(100% - 16px);
  box-sizing: border-box;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`
