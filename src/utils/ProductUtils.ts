import { IProductProperties } from "../core/IProductProperties";
import { Product } from "../core/ProductModel";


export class ProductUtils {
    // Métodos Estáticos Auxiliares
    static getCategory(productsList: IProductProperties[]): string[] {
        return [
            ...new Set(
                productsList.filter((p) => p.showInWeb).map((p) => p.category)
            ),
        ];
    }

    static getLine(productsList: IProductProperties[]): string[] {
        return [
            ...new Set(
                productsList.filter((p) => p.showInWeb).map((p) => p.line)
            ),
        ];
    }

    static getConcentrationLevel(productsList: IProductProperties[]): string[] {
        return [
            ...new Set(
                productsList
                    .filter((p) => p.showInWeb)
                    .map((p) => p.concentrationLevel)
            ),
        ];
    }

    static getClassification(productsList: IProductProperties[]): string[] {
        return [
            ...new Set(
                productsList
                    .filter((p) => p.showInWeb)
                    .map((p) => p.classification)
            ),
        ];
    }
}
