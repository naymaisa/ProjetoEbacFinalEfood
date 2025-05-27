import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  h4 {
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  div {
    flex: 1;
    min-width: 280px;
    margin-bottom: 16px;
  }
`

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 32px;
  font-size: 14px;
  opacity: 0.8;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;

  a {
    transition: color 0.3s ease;
    color: ${cores.azul_escuro};

    &:hover {
      color: ${cores.azul_claro};
    }
  }
`
