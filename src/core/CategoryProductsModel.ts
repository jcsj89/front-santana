type CLASSIFICATION = "COMUM" | "CONCENTRADA" | "SUPER" | "ACABAMENTO";
type CATEGORY = "AUTOMOTIVA" | "INDUSTRIAL";

class CategoryProductsModel {
  #category: CATEGORY = 'AUTOMOTIVA';
  #classification: CLASSIFICATION[] = [];

  constructor() {}

  static createEmpty() {
    return new CategoryProductsModel();
  }

  get category() {
    return this.#category;
  }
  set category(category) {
    this.#category = category;
  }
  get classification() {
    return this.#classification;
  }
  set classification(classification) {
    this.#classification = classification;
  }
}

export default CategoryProductsModel;
