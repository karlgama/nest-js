export class Produto {
  private id: number;
  private codigo: string;
  private preco: number;
  private nome: string;

  constructor(codigo: string, nome: string, preco: number) {
    this.codigo = codigo;
    this.preco = preco;
    this.nome = nome;
  }
}
