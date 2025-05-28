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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`

export const ProdutoCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const ProdutoImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const ProdutoInfo = styled.div`
  padding: 16px;
`

export const ProdutoTitulo = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`

export const ProdutoDescricao = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`

export const AdicionarButton = styled.button`
  background-color: ${cores.salmao};
  color: ${cores.branco};
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
