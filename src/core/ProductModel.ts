import { v4 } from "uuid";
import { IProductProperties } from "./IProductProperties";

export class Product implements IProductProperties {
    static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };

    // Propriedades do Produto
    #id?: string;
    #active = Product.STATUS.ACTIVE;
    #showInWeb = Product.STATUS.HIDE;
    #discountPercent = 0;
    #discountValue = 0;
    #price = 0;
    #priceUnit = 0;
    #description = "";
    #detailedProductDescription = "";
    #freeWeight = 0;
    #grossWeight = 0;
    #color = "";
    #embalagem_id = "";
    #codeEAN = "";
    #validity = "";
    #brand = "";
    #producer = "";
    #cost = 0;
    #inventory = 0;
    #inventoryCost = 0;
    #size = "";
    #codeProd = "";
    #codeNCM = "";
    #density = 0;
    #dilution = "";
    #dilutionPercent = 0;
    #concentrationLevel = "";
    #indicacaoDeUso = "";
    #modoDeUso = "";
    #line = ""; //automotiva,industrial,domestica
    #category = ""; //acabamento,geral,desengraxante,desincrustante,neutro
    #classification = ""; //brilho,geral,comum,concentrado,super
    #tags: string[] | null = null;
    #documents: string[] | null = null;
    #photos: string[] | null = null;
    #ph = 7;

    constructor() {
        this.#id = v4();
    }

    // Getters e Setters
    get id(): string | undefined {
        return this.#id;
    }

    get active(): boolean {
        return this.#active;
    }
    set active(value: boolean) {
        this.#active = value;
    }

    get showInWeb(): boolean {
        return this.#showInWeb;
    }
    set showInWeb(value: boolean) {
        this.#showInWeb = value;
    }

    get description(): string {
        return this.#description;
    }
    set description(value: string) {
        this.#description = value;
    }

    get detailedProductDescription(): string {
        return this.#detailedProductDescription;
    }
    set detailedProductDescription(value: string) {
        this.#detailedProductDescription = value;
    }

    get codeProd(): string {
        return this.#codeProd;
    }
    set codeProd(value: string) {
        this.#codeProd = value;
    }

    get codeNCM(): string {
        return this.#codeNCM;
    }
    set codeNCM(value: string) {
        this.#codeNCM = value;
    }

    get codeEAN(): string {
        return this.#codeEAN;
    }
    set codeEAN(value: string) {
        this.#codeEAN = value;
    }

    get color(): string {
        return this.#color;
    }
    set color(value: string) {
        this.#color = value;
    }

    get validity(): string {
        return this.#validity;
    }
    set validity(value: string) {
        this.#validity = value;
    }

    get size(): string {
        return this.#size;
    }
    set size(value: string) {
        this.#size = value;
    }

    get price(): number {
        return this.#price;
    }
    set price(value: number) {
        this.#price = value;
    }

    get priceUnit(): number {
        return this.#priceUnit;
    }
    set priceUnit(value: number) {
        this.#priceUnit = value;
    }

    get discountValue(): number {
        return this.#discountValue;
    }
    set discountValue(value: number) {
        this.#discountValue = value;
    }

    get discountPercent(): number {
        return this.#discountPercent;
    }
    set discountPercent(value: number) {
        this.#discountPercent = value;
    }

    get cost(): number {
        return this.#cost;
    }
    set cost(value: number) {
        this.#cost = value;
    }

    get inventory(): number {
        return this.#inventory;
    }
    set inventory(value: number) {
        this.#inventory = value;
    }

    get inventoryCost(): number {
        return this.#inventoryCost;
    }
    set inventoryCost(value: number) {
        this.#inventoryCost = value;
    }

    get density(): number {
        return this.#density;
    }
    set density(value: number) {
        this.#density = value;
    }

    get freeWeight(): number {
        return this.#freeWeight;
    }
    set freeWeight(value: number) {
        this.#freeWeight = value;
    }

    get grossWeight(): number {
        return this.#grossWeight;
    }
    set grossWeight(value: number) {
        this.#grossWeight = value;
    }

    get dilution(): string {
        return this.#dilution;
    }
    set dilution(value: string) {
        this.#dilution = value;
    }

    get dilutionPercent(): number {
        return this.#dilutionPercent;
    }
    set dilutionPercent(value: number) {
        this.#dilutionPercent = value;
    }

    get classification(): string {
        return this.#classification;
    }
    set classification(value: string) {
        this.#classification = value.toLowerCase();
    }

    get line(): string {
        return this.#line || "geral";
    }
    set line(value: string) {
        this.#line = value.toLowerCase();
    }

    get brand(): string {
        return this.#brand;
    }
    set brand(value: string) {
        this.#brand = value;
    }

    get producer(): string {
        return this.#producer;
    }
    set producer(value: string) {
        this.#producer = value;
    }

    get embalagem_id(): string {
        return this.#embalagem_id;
    }
    set embalagem_id(value: string) {
        this.#embalagem_id = value;
    }

    get category(): string {
        return this.#category;
    }
    set category(value: string) {
        this.#category = value.toLowerCase();
    }

    get tags(): string[] | null {
        return this.#tags;
    }
    set tags(value: string[] | null) {
        this.#tags = value;
    }

    get documents(): string[] | null {
        return this.#documents;
    }
    set documents(value: string[] | null) {
        this.#documents = value;
    }

    get photos(): string[] | null {
        return this.#photos;
    }
    set photos(value: string[] | null) {
        this.#photos = value;
    }

    get indicacaoDeUso(): string {
        return this.#indicacaoDeUso;
    }
    set indicacaoDeUso(value: string) {
        this.#indicacaoDeUso = value;
    }

    get modoDeUso(): string {
        return this.#modoDeUso;
    }
    set modoDeUso(value: string) {
        this.#modoDeUso = value;
    }

    get concentrationLevel(): string {
        return this.#concentrationLevel || "geral";
    }
    set concentrationLevel(value: string) {
        this.#concentrationLevel = value;
    }

    get ph(): number {
        return Math.max(0, Math.min(14, this.#ph));
    }
    set ph(value: number) {
        this.#ph = value;
    }

    // Factory methods
    static createEmpty(): Product {
        return new Product();
    }

    static factory(
        line: string,
        category: string,
        discountPercent: number = 0,
        discountValue: number = 0,
        price: number = 0,
        priceUnit: number = 0,
        description: string = "",
        detailedProductDescription: string = "",
        size: string = "",
        freeWeight: number = 0,
        grossWeight: number = 0,
        color: string = "",
        codeEAN: string = "",
        validity: string = "",
        brand: string = "",
        producer: string = "",
        cost: number = 0,
        inventory: number = 0,
        inventoryCost: number = 0,
        codeProd: string = "",
        codeNCM: string = "",
        concentrationLevel: string = "geral",
        dilution: string = "",
        dilutionPercent: number = 10,
        classification: string = "",
        indicacaoDeUso: string = "",
        modoDeUso: string = "",
        tags: string[] = [],
        documents: string[] = [],
        photos: string[] = [],
        ph: number = 7
    ): Product {
        const product = new Product();

        product.line = line;
        product.category = category;
        product.discountPercent = discountPercent;
        product.discountValue = discountValue;
        product.price = price;
        product.priceUnit = priceUnit;
        product.description = description;
        product.detailedProductDescription = detailedProductDescription;
        product.size = size;
        product.freeWeight = freeWeight;
        product.grossWeight = grossWeight;
        product.color = color;
        product.codeEAN = codeEAN;
        product.validity = validity;
        product.brand = brand;
        product.producer = producer;
        product.cost = cost;
        product.inventory = inventory;
        product.inventoryCost = inventoryCost;
        product.codeProd = codeProd;
        product.codeNCM = codeNCM;
        product.concentrationLevel = concentrationLevel;
        product.dilution = dilution;
        product.dilutionPercent = dilutionPercent;
        product.classification = classification;
        product.indicacaoDeUso = indicacaoDeUso;
        product.modoDeUso = modoDeUso;
        product.tags = tags;
        product.documents = documents;
        product.photos = photos;
        product.ph = ph;

        return product;
    }
}
