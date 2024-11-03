import { v4 } from "uuid";
import IProduct from "./IProductProperties";
class Product implements IProduct {
    static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
    #id?: string;
    #active: boolean; // esta ativo ?
    #showInWeb: boolean; // mostra no site, default is false ?
    #description: string;
    #detailedProductDescription?: string;
    #codeProd: string; // unique
    #codeNCM: string;
    #codeEAN: string; // codigo de barras
    #color: string; //
    #validity: string; // validade
    #size: string;
    #price: number; // preco do produto
    #priceUnit: number; //
    #discountValue: number; // desconto no preco
    #discountPercent: number; // desconto no preco
    #cost: number; // custo do produto - necessario realizar calculo pela formula
    #inventory: number; // qtd estoque do produto
    #inventoryCost: number; // custo do estoque de produto
    #density: number; // densidade do produto
    #freeWeight: number; // peso liquido
    #grossWeight: number; // peso bruto
    #concentrationLevel: string;
    #classification: string; // DESENGRAXANTE,NEUTRO,ACABAMENTO
    #category: string; // AUTOMOTIVA,INDUSTRIAL,DOMESTICA
    #dilution: string; // 1:10
    #dilutionPercent: number; // 1%
    #indicacaoDeUso: string; //frase de inndic
    #modoDeUso: string; //frase  modo ded uso

    // FUTURE RELS
    #brand: string; // marca
    #producer: string; // fabricante
    // RELATIONSHIPS N:N
    #embalagem_id: string; // tabela N:1 embalagens de venda
    //
    // tags relacionadas ao produto
    #tags: string[] | null; // N:N - tabela externa ou string separada por virgula
    #documents: string[] | null; // 1:N na tabela documents deve ter o id do produto
    //deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
    #photos: string[] | null; // tabela 1:N

    constructor(
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
        concentrationLevel = "",
        category = "",
        indicacaoDeUso = "",
        modoDeUso = "",
        dilutionPercent = 10,
        tags = [""],
        documents = [""],
        photos = null
    ) {
        this.#id = v4();
        this.#active = Product.STATUS.ACTIVE;
        this.#showInWeb = Product.STATUS.HIDE;
        this.#discountPercent = discountPercent;
        this.#discountValue = discountValue;
        this.#price = price;
        this.#priceUnit = priceUnit;
        this.#description = description;
        this.#detailedProductDescription = detailedProductDescription;
        this.#freeWeight = freeWeight;
        this.#grossWeight = grossWeight;
        this.#color = color;
        this.#embalagem_id = embalagem_id || "";
        this.#codeEAN = codeEAN;
        this.#validity = validity;
        this.#brand = brand;
        this.#producer = producer;
        this.#cost = cost;
        this.#inventory = inventory;
        this.#inventoryCost = inventoryCost;
        this.#size = size;
        this.#codeProd = codeProd;
        this.#codeNCM = codeNCM;
        this.#density = density;
        this.#classification = "";
        this.#dilution = "";
        this.#dilutionPercent = dilutionPercent;
        this.#concentrationLevel = concentrationLevel;
        this.#category = category;
        this.#indicacaoDeUso = indicacaoDeUso;
        this.#modoDeUso = modoDeUso;
        this.#tags = tags;
        this.#documents = documents;
        this.#photos = photos;
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
        if (
            this.#dilutionPercent !== undefined &&
            this.#dilutionPercent >= 0 &&
            this.#dilutionPercent < 100
        ) {
            return this.#dilutionPercent;
        } else {
            return 10.0;
        }
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

    get indicacaoDeUso() {
        return this.#indicacaoDeUso;
    }

    set indicacaoDeUso(indicacaoDeUso) {
        this.#indicacaoDeUso = indicacaoDeUso;
    }

    get modoDeUso() {
        return this.#modoDeUso;
    }

    set modoDeUso(modoDeUso) {
        this.#modoDeUso = modoDeUso;
    }

    get concentrationLevel() {
        return this.#concentrationLevel?.length
            ? this.#concentrationLevel
            : "geral";
    }

    set concentrationLevel(concentrationLevel) {
        this.#concentrationLevel = concentrationLevel;
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
        return new Product(
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
            photos
        );
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
