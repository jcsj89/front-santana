class Produto {
  #nome: string = "";
  #categoria: string = "automotiva";
  #sub_categoria: string = "linha comum";
  #tags: string = "";
  #descricao: string = "";
  #preco: string = "98,00";
  #ativo: boolean = true;

  constructor() {}

  get nome() {
    return this.#nome;
  }
}
