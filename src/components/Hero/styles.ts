import styled from 'styled-components'

export const Container = styled.header<{ backgroundImage?: string }>`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImage || 'none'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;

  img {
    margin-top: 62px;
    margin-bottom: 132px;
    max-width: 150px;
    height: auto;
  }

  h2 {
    font-size: 36px;
    color: #e66767;
    line-height: 1.4;
    text-align: center;

    margin-bottom: 40px;
  }
`

export const Titulo = styled.h1`
  font-size: 32px;
  margin: 8px 0;
`

export const Voltar = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #000;
`

export const CarrinhoInfo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 14px;
`

export const ConteudoCentralizado = styled.div`
  font-size: 24px;
  max-width: 600px;
  line-height: 1.4;
`
