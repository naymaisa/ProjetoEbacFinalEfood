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
  width: 125px;
  margin-bottom: 138px;
`

export const RestauranteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
`
export const Frase = styled.h2`
  color: ${cores.salmao};
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
`
export const RestauranteCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${cores.salmao};

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
  font-weight: 700;
  line-height: 100%;
  font-size: 12px;
`

export const Conteudo = styled.div`
  padding: 8px;
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
  line-height: 100%;
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
  line-height: 22px;

  margin-bottom: 16px;
`

export const SaibaMais = styled.button`
  background-color: ${cores.salmao};
  width: 82px;
  height: 24px;
  color: white;
  border: none;

  font-size: 14px;
  font-weight: 700;
  line-height: 100%;

  cursor: pointer;
`
