export type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  destacado: boolean
  avaliacao: number
  cardapio: Produto[]
}
