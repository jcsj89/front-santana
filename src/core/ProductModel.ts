import { v4 } from "uuid";

// interface
interface IProduct {
  id?: string;
  active?: boolean; // esta ativo?
  showInWeb?: boolean;
  description?: string; // nome do produto
  detailedProductDescription?: string;
  codeProd?: string;
  codeNCM?: string;
  codeEAN?: string; // codigo de barras
  price?: number; // preco do produto
  priceUnit?: number;
  discountValue?: number; // desconto no preco
  discountPercent?: number; // desconto no preco
  inventory?: number; // estoque do produto
  cost?: number; // estoque do produto
  inventoryCost?: number; // custo do estoque do produto
  category?: string[]; // categoria do produto
  density?: number; // densidade do produto
  freeWeight?: number; // peso livre
  grossWeight?: number; //peso bruto
  color?: string;
  validity?: string; // validade
  brand?: string; // marca
  size?: string;
  producer?: string; // fabricante
  classification?: string; // comum ou concentrado ou super concentrado
  dilution?: string; // 1:10
  dilutionPercent?: number; // 1:10
  //
  // relacionamentos
  //
  embalagem_id?: string; // tabela N:1 embalagens de venda
  //
  tags?: string[]; // N:N tabela tags relacionadas ao produto
  documents?: string[]; // deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  photos?: string[]; // tabela 1:N
}

/*    INFORMACOES SOBRE O PRODUTO
  - Produto pode ser produto acabado, materia-prima
  - ou qualquer outro produto, ou seja, produto e generico
  cada produto tem sua litragem para facilicitar um dia se tornar e-comerce
  ex: ATIVADO 140 - 5 litros
  ex: ATIVADO 140 - 200 litros
  separando os produtos por embalagem
*/

type CLASSIFICATION = "COMUM" | "CONCENTRADA" | "SUPER" | "ACABAMENTO" | "";
type CATEGORY = "AUTOMOTIVA" | "INDUSTRIAL" | "";

class Product {
  static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
  static CLASSIFICATION = {
    COMUM: "COMUM",
    CONCENTRADA: "CONCENTRADA",
    SUPER: "SUPER",
    ACABAMENTO: "ACABAMENTO",
  };
  static CATEGORY = {
    AUTOMOTIVA: "AUTOMOTIVA",
    INDUSTRIAL: "INDUSTRIAL",
  };
  #id?: string;
  #active?: boolean; // esta ativo ?
  #showInWeb?: boolean; // mostra no site, default is false ?
  #description?: string;
  #detailedProductDescription?: string;
  #codeProd?: string; // unique
  #codeNCM?: string;
  #codeEAN?: string; // codigo de barras
  #color?: string; //
  #validity?: string; // validade
  #size?: string;
  #price?: number; // preco do produto
  #priceUnit?: number; //
  #discountValue?: number; // desconto no preco
  #discountPercent?: number; // desconto no preco
  #cost?: number; // custo do produto - necessario realizar calculo pela formula
  #inventory?: number; // qtd estoque do produto
  #inventoryCost?: number; // custo do estoque de produto
  #density?: number; // densidade do produto
  #freeWeight?: number; // peso liquido
  #grossWeight?: number; // peso bruto

  #classification?: CLASSIFICATION; // AUTOMOTIVA
  #category?: CATEGORY; // COMUM - CONCENTRADA
  #dilution?: string; // 1:10
  #dilutionPercent?: number; // 1%

  // FUTURE RELS
  #brand?: string; // marca
  #producer?: string; // fabricante
  // RELATIONSHIPS N:N
  #embalagem_id?: string; // tabela N:1 embalagens de venda
  //
  // tags relacionadas ao produto
  #tags?: string[]; // N:N - tabela externa ou string separada por virgula
  #documents?: string[]; // 1:N na tabela documents deve ter o id do produto
  //deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  #photos?: string[]; // tabela 1:N

  constructor({
    description = "",
    detailedProductDescription = "",
    price = 0,
    priceUnit = 0,
    discountPercent = 0,
    discountValue = 0,
    freeWeight = 0,
    grossWeight = 0,
    color = "",
    codeEAN = "",
    validity = "",
    brand = "",
    producer = "",
    cost = 0,
    inventory = 0,
    inventoryCost = 0,
    size = "",
    codeProd = "",
    codeNCM = "",
    density = 0,
    embalagem_id = "",
  }: IProduct) {
    this.id = v4();
    this.active = Product.STATUS.ACTIVE;
    this.showInWeb = Product.STATUS.HIDE;
    this.discountPercent = discountPercent;
    this.discountValue = discountValue;
    this.price = price;
    this.priceUnit = priceUnit;
    this.description = description;
    this.detailedProductDescription = detailedProductDescription;
    this.freeWeight = freeWeight;
    this.grossWeight = grossWeight;
    this.color = color;
    this.embalagem_id = embalagem_id || "";
    this.codeEAN = codeEAN;
    this.validity = validity;
    this.brand = brand;
    this.producer = producer;
    this.cost = cost;
    this.inventory = inventory;
    this.inventoryCost = inventoryCost;
    this.size = size;
    this.codeProd = codeProd;
    this.codeNCM = codeNCM;
    this.density = density;
    // this.classification = "";
    this.dilution = "";
    this.dilutionPercent = 1;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get active() {
    return this.#active;
  }

  set active(active) {
    this.#active = active;
  }

  get showInWeb() {
    return this.#showInWeb;
  }

  set showInWeb(showInWeb) {
    this.#showInWeb = showInWeb;
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  get detailedProductDescription() {
    return this.#detailedProductDescription;
  }

  set detailedProductDescription(detailedProductDescription) {
    this.#detailedProductDescription = detailedProductDescription;
  }

  get codeProd() {
    return this.#codeProd;
  }

  set codeProd(codeProd) {
    this.#codeProd = codeProd;
  }

  get codeNCM() {
    return this.#codeNCM;
  }

  set codeNCM(codeNCM) {
    this.#codeNCM = codeNCM;
  }

  get codeEAN() {
    return this.#codeEAN;
  }

  set codeEAN(codeEAN) {
    this.#codeEAN = codeEAN;
  }

  get color() {
    return this.#color;
  }

  set color(color) {
    this.#color = color;
  }

  get validity() {
    return this.#validity;
  }

  set validity(validity) {
    this.#validity = validity;
  }

  get size() {
    return this.#size;
  }

  set size(size) {
    this.#size = size;
  }

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price;
  }
  get priceUnit() {
    return this.#priceUnit;
  }

  set priceUnit(priceUnit) {
    this.#priceUnit = priceUnit;
  }
  get discountValue() {
    return this.#discountValue;
  }

  set discountValue(discountValue) {
    this.#discountValue = discountValue;
  }
  get discountPercent() {
    return this.#discountPercent;
  }

  set discountPercent(discountPercent) {
    this.#discountPercent = discountPercent;
  }
  get cost() {
    return this.#cost;
  }

  set cost(cost) {
    this.#cost = cost;
  }

  get inventory() {
    return this.#inventory;
  }

  set inventory(inventory) {
    this.#inventory = inventory;
  }

  get inventoryCost() {
    return this.#inventoryCost;
  }

  set inventoryCost(inventoryCost) {
    this.#inventoryCost = inventoryCost;
  }

  get density() {
    return this.#density;
  }

  set density(density) {
    this.#density = density;
  }

  get freeWeight() {
    return this.#freeWeight;
  }

  set freeWeight(freeWeight) {
    this.#freeWeight = freeWeight;
  }

  get grossWeight() {
    return this.#grossWeight;
  }

  set grossWeight(grossWeight) {
    this.#grossWeight = grossWeight;
  }

  get dilution() {
    return this.#dilution;
  }

  set dilution(dilution) {
    this.#dilution = dilution;
  }

  get dilutionPercent() {
    return this.#dilutionPercent;
  }

  set dilutionPercent(dilutionPercent) {
    this.#dilutionPercent = dilutionPercent;
  }

  get classification() {
    return this.#classification;
  }

  set classification(classification) {
    this.#classification = classification;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    this.#brand = brand;
  }

  get producer() {
    return this.#producer;
  }

  set producer(producer) {
    this.#producer = producer;
  }

  get embalagem_id() {
    return this.#embalagem_id;
  }

  set embalagem_id(embalagem_id) {
    this.#embalagem_id = embalagem_id;
  }

  get category() {
    return this.#category;
  }

  set category(category) {
    this.#category = category;
  }

  get tags() {
    return this.#tags;
  }

  set tags(tags) {
    this.#tags = tags;
  }

  get documents() {
    return this.#documents;
  }

  set documents(documents) {
    this.#documents = documents;
  }

  get photos() {
    return this.#photos;
  }

  set photos(photos) {
    this.#photos = photos;
  }

  static createEmpty() {
    return new Product({});
  }

  static create({
    discountPercent,
    discountValue,
    price,
    priceUnit,
    description,
    detailedProductDescription,
    category,
    freeWeight,
    grossWeight,
    color,
    embalagem_id,
    codeEAN,
    validity,
    brand,
    producer,
    cost,
    inventory,
    inventoryCost,
    size,
    codeProd,
    codeNCM,
    density,
    tags,
    documents,
    photos,
  }: IProduct) {
    return new Product({
      description,
      detailedProductDescription,
      price,
      priceUnit,
      discountPercent,
      discountValue,
      color,
      category,
      freeWeight,
      grossWeight,
      embalagem_id,
      codeEAN,
      validity,
      brand,
      producer,
      cost,
      inventory,
      inventoryCost,
      size,
      codeProd,
      codeNCM,
      density,
      tags,
      documents,
      photos,
    });
  }

  // Funcoes help para connstruir menu no  site
  static getCategory(productsList: Product[]) {
    const categoryList: string[] = [];
    productsList.map((p) => {
      if (p.category !== undefined && p.showInWeb) {
        !categoryList.includes(p.category)
          ? categoryList.push(p.category)
          : null;
      }
    });
    return categoryList;
  }

  static getClassification(productsList: Product[]) {
    const classificationList: string[] = [];
    productsList.map((p) => {
      if (p.classification !== undefined && p.showInWeb) {
        !classificationList.includes(p.classification)
          ? classificationList.push(p.classification)
          : null;
      }
    });
    return classificationList;
  }
}

export default Product;
