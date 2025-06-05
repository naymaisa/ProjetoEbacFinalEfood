import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa_bebe};
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
    font-size: 10px;
    font-weight: 400;
  }
`
export const Logo = styled.img`
  display: block;
  margin: 42px auto 32px auto;
  width: 125px;
  height: 58px;
  margin-bottom: 32px;
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
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  width: 100%;
  margin: 0 auto;
  a {
    transition: color 0.3s ease;
    color: ${cores.salmao};

    &:hover {
      color: ${cores.salmao};
    }
  }
`
