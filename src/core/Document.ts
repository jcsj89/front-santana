export class Document {
    // Propriedades do documento
    private title: string;
    private content: string;
    private author: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    // Método para obter o título do documento
    getTitle(): string {
        return this.title;
    }

    // Método para atualizar o título do documento
    setTitle(newTitle: string): void {
        this.title = newTitle;
        this.updatedAt = new Date();
    }

    // Método para obter o conteúdo do documento
    getContent(): string {
        return this.content;
    }

    // Método para atualizar o conteúdo do documento
    setContent(newContent: string): void {
        this.content = newContent;
        this.updatedAt = new Date();
    }

    // Método para obter o autor do documento
    getAuthor(): string {
        return this.author;
    }

    // Método para definir o autor do documento
    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
        this.updatedAt = new Date();
    }

    // Método para obter a data de criação
    getCreatedAt(): Date {
        return this.createdAt;
    }

    // Método para obter a data da última atualização
    getUpdatedAt(): Date {
        return this.updatedAt;
    }

    // Método para exibir um resumo do documento
    getSummary(): string {
        return `${this.title} by ${
            this.author
        }, created on ${this.createdAt.toDateString()}`;
    }
}


