import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 0;
`
export const Logo = styled.img`
  display: block;
  margin: 0 auto 16px auto;
  max-width: 200px;
  margin-bottom: 138px;
`

export const RestauranteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`

export const RestauranteCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${cores.salmao};

  margin-bottom: 24px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`

export const Capa = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Tag = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${cores.salmao};
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
`

export const Conteudo = styled.div`
  padding: 16px;
  color: ${cores.salmao};

  .linhaTituloNota {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  margin: 0 0 4px;
  font-weight: 700;
`

export const Nota = styled.p`
  font-size: 18px;
  margin: 0 0 8px;
  font-weight: 700;

  .numero {
    color: ${cores.salmao};
    font-weight: bold;
  }

  .estrela {
    color: gold;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.salmao};
  font-weight: 400;

  margin-bottom: 16px;
`

export const SaibaMais = styled.button`
  background-color: ${cores.salmao};
  color: white;
  border: none;
  padding: 8px 16px;

  cursor: pointer;
`
