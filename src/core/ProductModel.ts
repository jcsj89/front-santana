import { v4 } from "uuid";
import { IProductProperties } from "./IProductProperties";
class Product implements IProductProperties {
    static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
    #id?: string;
    #active: boolean; // esta ativo?
    #showInWeb: boolean;
    #description: string; // nome do produto
    #detailedProductDescription: string;
    #codeProd: string;
    #codeNCM: string;
    #codeEAN: string; // codigo de barras
    #price: number; // preco do produto
    #priceUnit: number;
    #discountValue: number; // desconto no preco
    #discountPercent: number; // desconto no preco
    #inventory: number; // estoque do produto
    #cost: number; // estoque do produto
    #inventoryCost: number; // custo do estoque do produto
    #category: string; // categoria do produto //automotiva,industrial,domestica
    #density: number; // densidade do produto
    #freeWeight: number; // peso livre
    #grossWeight: number; //peso bruto
    #color: string;
    #validity: string; // validade
    #brand: string; // marca
    #size: string;
    #producer: string; // fabricante
    #classification: string; // desengraxante, desincrustante, neutro, acabamento
    #concentrationLevel: string; // comum ou concentrado ou super concentrado
    #dilution: string; // 1:10
    #dilutionPercent: number; // 2,5
    #indicacaoDeUso: string;
    #modoDeUso: string;
    #embalagem_id: string; // tabela N:1 embalagens de venda
    #tags: string[] | null; // N:N tabela tags relacionadas ao produto
    #documents: string[] | null; // deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
    #photos: string[] | null; // tabela 1:N
    #ph: number;

    constructor() {
        this.#id = v4();
        this.#active = Product.STATUS.ACTIVE;
        this.#showInWeb = Product.STATUS.HIDE;
        this.#discountPercent = 0;
        this.#discountValue = 0;
        this.#price = 0;
        this.#priceUnit = 0;
        this.#description = "";
        this.#detailedProductDescription = "";
        this.#freeWeight = 0;
        this.#grossWeight = 0;
        this.#color = "";
        this.#embalagem_id = "";
        this.#codeEAN = "";
        this.#validity = "";
        this.#brand = "";
        this.#producer = "";
        this.#cost = 0;
        this.#inventory = 0;
        this.#inventoryCost = 0;
        this.#size = "";
        this.#codeProd = "";
        this.#codeNCM = "";
        this.#density = 0;
        this.#classification = "";
        this.#dilution = "";
        this.#dilutionPercent = 0;
        this.#concentrationLevel = "";
        this.#category = "";
        this.#indicacaoDeUso = "";
        this.#modoDeUso = "";
        this.#tags = [""];
        this.#documents = [""];
        this.#photos = [""];
        this.#ph = 7;
    }

    get id(): string | undefined {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get active(): boolean {
        return this.#active;
    }
    set active(active) {
        this.#active = active;
    }

    get showInWeb(): boolean {
        return this.#showInWeb;
    }
    set showInWeb(showInWeb) {
        this.#showInWeb = showInWeb;
    }

    get description(): string {
        return this.#description;
    }
    set description(description) {
        this.#description = description;
    }

    get detailedProductDescription(): string {
        return this.#detailedProductDescription;
    }
    set detailedProductDescription(detailedProductDescription) {
        this.#detailedProductDescription = detailedProductDescription;
    }

    get codeProd(): string {
        return this.#codeProd;
    }
    set codeProd(codeProd) {
        this.#codeProd = codeProd;
    }

    get codeNCM(): string {
        return this.#codeNCM;
    }
    set codeNCM(codeNCM) {
        this.#codeNCM = codeNCM;
    }

    get codeEAN(): string {
        return this.#codeEAN;
    }
    set codeEAN(codeEAN) {
        this.#codeEAN = codeEAN;
    }

    get color(): string {
        return this.#color;
    }
    set color(color) {
        this.#color = color;
    }

    get validity(): string {
        return this.#validity;
    }
    set validity(validity) {
        this.#validity = validity;
    }

    get size(): string {
        return this.#size;
    }
    set size(size) {
        this.#size = size;
    }

    get price(): number {
        return this.#price;
    }
    set price(price) {
        this.#price = price;
    }

    get priceUnit(): number {
        return this.#priceUnit;
    }
    set priceUnit(priceUnit) {
        this.#priceUnit = priceUnit;
    }

    get discountValue(): number {
        return this.#discountValue;
    }
    set discountValue(discountValue) {
        this.#discountValue = discountValue;
    }

    get discountPercent(): number {
        return this.#discountPercent;
    }
    set discountPercent(discountPercent) {
        this.#discountPercent = discountPercent;
    }

    get cost(): number {
        return this.#cost;
    }
    set cost(cost) {
        this.#cost = cost;
    }

    get inventory(): number {
        return this.#inventory;
    }
    set inventory(inventory) {
        this.#inventory = inventory;
    }

    get inventoryCost(): number {
        return this.#inventoryCost;
    }
    set inventoryCost(inventoryCost) {
        this.#inventoryCost = inventoryCost;
    }

    get density(): number {
        return this.#density;
    }
    set density(density) {
        this.#density = density;
    }

    get freeWeight(): number {
        return this.#freeWeight;
    }
    set freeWeight(freeWeight) {
        this.#freeWeight = freeWeight;
    }

    get grossWeight(): number {
        return this.#grossWeight;
    }
    set grossWeight(grossWeight) {
        this.#grossWeight = grossWeight;
    }

    get dilution(): string {
        return this.#dilution;
    }
    set dilution(dilution) {
        this.#dilution = dilution;
    }

    get dilutionPercent(): number {
        if (
            this.#dilutionPercent !== undefined &&
            this.#dilutionPercent >= 0 &&
            this.#dilutionPercent <= 100
        ) {
            return this.#dilutionPercent;
        } else {
            return 10.0;
        }
    }
    set dilutionPercent(dilutionPercent) {
        this.#dilutionPercent = dilutionPercent;
    }

    get classification(): string {
        return this.#classification;
    }
    set classification(classification) {
        this.#classification = classification;
    }

    get brand(): string {
        return this.#brand;
    }
    set brand(brand) {
        this.#brand = brand;
    }

    get producer(): string {
        return this.#producer;
    }
    set producer(producer) {
        this.#producer = producer;
    }

    get embalagem_id(): string {
        return this.#embalagem_id;
    }
    set embalagem_id(embalagem_id) {
        this.#embalagem_id = embalagem_id;
    }

    get category(): string {
        return this.#category;
    }
    set category(category) {
        this.#category = category;
    }

    get tags(): string[] | null {
        return this.#tags;
    }
    set tags(tags) {
        this.#tags = tags;
    }

    get documents(): string[] | null {
        return this.#documents;
    }
    set documents(documents) {
        this.#documents = documents;
    }

    get photos(): string[] | null {
        return this.#photos;
    }
    set photos(photos) {
        this.#photos = photos;
    }

    get indicacaoDeUso(): string {
        return this.#indicacaoDeUso;
    }
    set indicacaoDeUso(indicacaoDeUso) {
        this.#indicacaoDeUso = indicacaoDeUso;
    }

    get modoDeUso(): string {
        return this.#modoDeUso;
    }
    set modoDeUso(modoDeUso) {
        this.#modoDeUso = modoDeUso;
    }

    get concentrationLevel(): string {
        return this.#concentrationLevel?.length
            ? this.#concentrationLevel
            : "geral";
    }
    set concentrationLevel(concentrationLevel) {
        this.#concentrationLevel = concentrationLevel;
    }

    get ph(): number {
        return this.#ph >= 0 && this.#ph <= 14 ? this.#ph : 7;
    }
    set ph(ph) {
        this.#ph = ph;
    }

    static createEmpty() {
        return new Product();
    }

    static create(
        discountPercent = 0,
        discountValue = 0,
        price = 0,
        priceUnit = 0,
        description = "",
        detailedProductDescription = "",
        category = "",
        freeWeight = 0,
        grossWeight = 0,
        color = "",
        embalagem_id = "",
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
        tags = [""],
        documents = [""],
        photos = [""]
    ) {
        const product = new Product();
        product.discountPercent = discountPercent;
        product.discountValue = discountValue;
        product.price = price;
        product.priceUnit = priceUnit;
        product.description = description;
        product.detailedProductDescription = detailedProductDescription;
        product.category = category;
        product.freeWeight = freeWeight;
        product.grossWeight = grossWeight;
        product.color = color;
        product.embalagem_id = embalagem_id;
        product.codeEAN = codeEAN;
        product.validity = validity;
        product.brand = brand;
        product.producer = producer;
        product.cost = cost;
        product.inventory = inventory;
        product.inventoryCost = inventoryCost;
        product.size = size;
        product.codeProd = codeProd;
        product.codeNCM = codeNCM;
        product.density = density;
        product.tags = tags;
        product.documents = documents;
        product.photos = photos;
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

    // Funcoes help para connstruir menu no  site
    static getConcentrationLevel(productsList: Product[]) {
        const concentrationLevelList: string[] = [];
        productsList.map((p) => {
            if (p.concentrationLevel !== undefined && p.showInWeb) {
                !concentrationLevelList.includes(p.concentrationLevel)
                    ? concentrationLevelList.push(p.concentrationLevel)
                    : null;
            }
        });
        return concentrationLevelList;
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

console.log(new Product());
