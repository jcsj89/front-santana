import { v4 } from "uuid";
interface IDocumentProperties {
    id?: string;
    type: string; // fispq, laudo, etc
    description: string;
    version: string | undefined;
    anexo: string;
    author: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class DocumentModel {
    #id: string;
    #type: string = ""; // fispq, laudo, etc
    #description: string = "";
    #version: string | undefined;
    #anexo: string = "";
    #author: string = "";
    #createdAt: Date = new Date();
    #updatedAt: Date = new Date();

    constructor() {
        this.#id = v4();
    }

    get description(): string {
        return this.#description;
    }

    get version(): string | undefined {
        return this.#version;
    }

    get anexo(): string {
        return this.#anexo;
    }

    get author(): string {
        return this.#author;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get updatedAt(): Date {
        return this.#updatedAt;
    }

    set description(description: string) {
        if (description === this.#description) return;
        if (description.length === 0) return;
        if (description.length > 100) return;

        this.#description = description;
        this.#updatedAt = new Date();
    }

    set version(version: string | undefined) {
        if (version === this.#version) return;
        if (version === undefined) return;
        if (version.length === 0) return;
        if (version.length > 1000) return;

        this.#version = version;
        this.#updatedAt = new Date();
    }

    set anexo(anexo: string) {
        if (anexo === this.#anexo) return;
        if (anexo.length === 0) return;
        if (anexo.length > 1000) return;

        this.#anexo = anexo;
        this.#updatedAt = new Date();
    }

    set author(author: string) {
        if (author === this.#author) return;
        if (author.length === 0) return;
        if (author.length > 100) return;

        this.#author = author;
        this.#updatedAt = new Date();
    }

    get id(): string {
        return this.#id;
    }

    get type(): string {
        return this.#type;
    }

    set type(type: string) {
        if (type === this.#type) return;
        if (type.length === 0) return;
        if (type.length > 50) return;

        this.#type = type;
        this.#updatedAt = new Date();
    }

    set createdAt(createdAt: Date) {
        if (createdAt === this.#createdAt) return;
        if (createdAt === undefined) return;
        if (createdAt > new Date()) return;

        this.#createdAt = createdAt;
        this.#updatedAt = new Date();
    }

    set updatedAt(updatedAt: Date) {
        if (updatedAt === this.#updatedAt) return;
        if (updatedAt === undefined) return;
        if (updatedAt < new Date()) return;
        this.#updatedAt = updatedAt;
    }

    // factory method
    static create(props: IDocumentProperties) {
        const document = new DocumentModel();
        document.type = props.type;
        document.description = props.description;
        document.version = props.version;
        document.anexo = props.anexo;
        document.author = props.author;
        document.createdAt = new Date();
        document.updatedAt = new Date();
        return document;
    }

    static createEmpty() {
        return new DocumentModel();
    }
}
