import { v4 } from "uuid";

export interface PackageProps {
    id?: string;
    description: string;
    image: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    volume?: number;
    cost?: number;
    price?: number;
    active?: boolean;
    showInWeb?: boolean;
    codeEAN?: string;
    material?: string;
    color?: string;
    createdAt?: Date;
    updatedAt?: Date;

}

export class PackageModel {
    // Propriedades da embalagem
    #description: string = "";
    #length: number = 0;
    #width: number = 0;
    #height: number = 0;
    #weight: number = 0;
    #volume: number = 0;
    #cost: number = 0;
    #price: number = 0;
    #image: string = "";
    #active: boolean = true;
    #showInWeb: boolean = false;
    #codeEAN: string = "";
    #material: string = "";
    #color: string = "";
    #createdAt: Date = new Date();
    #updatedAt: Date = new Date();
    #id?: string;

    constructor() {
        this.#id = v4();
    }

    calculateVolume() {
        if (this.#length === 0 || this.#width === 0 || this.#height === 0) {
            return 0;
        }

        this.#updatedAt = new Date();
        return this.#length * this.#width * this.#height;
    }

    activate() {
        this.#active = true;
        this.#updatedAt = new Date();
    }

    desactivate() {
        this.#active = false;
        this.#updatedAt = new Date();
    }

    showingInWeb() {
        this.#showInWeb = true;
        this.#updatedAt = new Date();
    }

    hidingInWeb() {
        this.#showInWeb = false;
        this.#updatedAt = new Date();
    }

    // Propriedades da embalagem
    get id(): string {
        return this.#id || v4();
    }

    // Método para obter o título do documento
    get description(): string {
        return this.#description;
    }

    // Método para atualizar o título do documento
    set description(newdescription: string) {
        this.#description = newdescription;
        this.#updatedAt = new Date();
    }

    // Método para obter o conteúdo do documento
    get length(): number {
        return this.#length;
    }

    // Método para atualizar o conteúdo do documento
    set length(newlength: number) {
        this.#length = newlength;
        this.#updatedAt = new Date();
    }

    // Método para obter o autor do documento
    get width(): number {
        return this.#width;
    }

    // Método para definir o autor do documento
    set width(newwidth: number) {
        this.#width = newwidth;
        this.#updatedAt = new Date();
    }

    get height(): number {
        return this.#height;
    }

    set height(newheight: number) {
        this.#height = newheight;
        this.#updatedAt = new Date();
    }

    get weight(): number {
        return this.#weight;
    }

    set weight(newweight: number) {
        this.#weight = newweight;
        this.#updatedAt = new Date();
    }

    get volume(): number {
        return this.#volume;
    }

    set volume(newvolume: number) {
        this.#volume = newvolume;
        this.#updatedAt = new Date();
    }

    get cost(): number {
        return this.#cost;
    }

    set cost(newcost: number) {
        this.#cost = newcost;
        this.#updatedAt = new Date();
    }

    get price(): number {
        return this.#price;
    }

    set price(newprice: number) {
        this.#price = newprice;
        this.#updatedAt = new Date();
    }

    get image(): string {
        return this.#image;
    }

    set image(newimage: string) {
        this.#image = newimage;
        this.#updatedAt = new Date();
    }

    get active(): boolean {
        return this.#active;
    }

    get showInWeb(): boolean {
        return this.#showInWeb;
    }

    get codeEAN(): string {
        return this.#codeEAN;
    }

    set codeEAN(newcodeEAN: string) {
        this.#codeEAN = newcodeEAN;
        this.#updatedAt = new Date();
    }

    get material(): string {
        return this.#material;
    }

    set material(newmaterial: string) {
        this.#material = newmaterial;
        this.#updatedAt = new Date();
    }

    get color(): string {
        return this.#color;
    }

    set color(newcolor: string) {
        this.#color = newcolor;
        this.#updatedAt = new Date();
    }

    // Método para obter a data de criação
    get createdAt(): Date {
        return this.#createdAt;
    }

    set createdAt(createdAt: Date) {
        if (createdAt === this.#createdAt) return;
        if (createdAt === undefined) return;
        if (createdAt > new Date()) return;
        this.#createdAt = createdAt;
        this.#updatedAt = new Date();
    }

    // Método para obter a data da última atualização
    get updatedAt(): Date {
        return this.#updatedAt;
    }

    set updatedAt(updatedAt: Date) {
        if (updatedAt === this.#updatedAt) return;
        if (updatedAt === undefined) return;
        if (updatedAt < new Date()) return;
        this.#updatedAt = updatedAt;
    }

    // factory method
    static create(props: PackageProps) {
        const packageModel = new PackageModel();
        packageModel.description = props.description;
        packageModel.length = props.length || 0;
        packageModel.width = props.width || 0;
        packageModel.height = props.height  || 0;
        packageModel.weight = props.weight || 0;
        packageModel.volume = props.volume || 0;
        packageModel.cost = props.cost || 0;
        packageModel.price = props.price || 0;
        packageModel.image = props.image;
        packageModel.activate();
        packageModel.showingInWeb();
        packageModel.codeEAN = props.codeEAN || "";
        packageModel.material = props.material || "";
        packageModel.color = props.color || "";
        packageModel.createdAt = new Date();
        packageModel.updatedAt = new Date();
        return packageModel;
    }

    static createEmpty() {
        return new PackageModel();
    }
}
