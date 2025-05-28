import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  branco: '#FFFFFF',
  rosa_bebe: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.salmao};
  }
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
