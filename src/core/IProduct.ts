export default interface IProduct {
    id?: string;
    active: boolean; // esta ativo?
    showInWeb: boolean;
    description: string; // nome do produto
    detailedProductDescription?: string;
    codeProd: string;
    codeNCM: string;
    codeEAN: string; // codigo de barras
    price: number; // preco do produto
    priceUnit: number;
    discountValue: number; // desconto no preco
    discountPercent: number; // desconto no preco
    inventory: number; // estoque do produto
    cost: number; // estoque do produto
    inventoryCost: number; // custo do estoque do produto
    category: string; // categoria do produto //automotiva,industrial,domestica
    density: number; // densidade do produto
    freeWeight: number; // peso livre
    grossWeight: number; //peso bruto
    color: string;
    validity: string; // validade
    brand: string; // marca
    size: string;
    producer: string; // fabricante
    classification: string; // desengraxante, desincrustante, neutro, acabamento
    concentrationLevel: string; // comum ou concentrado ou super concentrado
    dilution: string; // 1:10
    dilutionPercent: number; // 2,5
    indicacaoDeUso: string;
    modoDeUso: string;
    //
    // relacionamentos
    //
    embalagem_id: string; // tabela N:1 embalagens de venda
    //
    tags: string[] | null; // N:N tabela tags relacionadas ao produto
    documents: string[] | null; // deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
    photos: string[] | null; // tabela 1:N
}

// interface

/*    INFORMACOES SOBRE O PRODUTO
  - Produto pode ser produto acabado, materia-prima
  - ou qualquer outro produto, ou seja, produto e generico
  cada produto tem sua litragem para facilicitar um dia se tornar e-comerce
  ex: ATIVADO 140 - 5 litros
  ex: ATIVADO 140 - 200 litros
  separando os produtos por embalagem
*/

// type CLASSIFICATION = "COMUM" | "CONCENTRADA" | "SUPER" | "ACABAMENTO" | "";
// type CATEGORY = "AUTOMOTIVA" | "INDUSTRIAL" | "ACABAMENTO";
