import Product from "@/core/ProductModel";

const productsList: Product[] = [];
const categoryList: string[] = [];
const classificationList: string[] = [];

const prod1 = Product.createEmpty();
productsList.push(prod1);
prod1.description = "ativado 110";
prod1.dilution = "1:10";
prod1.dilutionPercent = 1;
prod1.color = "roxo";
prod1.tags = ["roxo", "bau", "aluminio"];
prod1.showInWeb = Product.STATUS.SHOW;
prod1.classification = "COMUM";
prod1.category = "AUTOMOTIVA";

const prod2 = Product.createEmpty();
productsList.push(prod2);
prod2.description = "sanq chassis 110";
prod2.dilution = "1:10";
prod2.dilutionPercent = 1;
prod2.color = "azul";
prod2.showInWeb = Product.STATUS.SHOW;
prod2.tags = ["azul", "bau", "chassis"];
prod2.classification = "COMUM";
prod2.category = "AUTOMOTIVA";

const prod3 = Product.createEmpty();
productsList.push(prod3);
prod3.description = "Sanq Chassis LS";
prod3.dilution = "1:40";
prod3.dilutionPercent = 1;
prod3.color = "azul";
prod3.showInWeb = Product.STATUS.SHOW;
prod3.tags = ["azul", "bau", "chassis"];
prod3.classification = "CONCENTRADA";
prod3.category = "AUTOMOTIVA";

const prod4 = Product.createEmpty();
productsList.push(prod4);
prod4.description = "Samix 220";
prod4.dilution = "1:100";
prod4.dilutionPercent = 1;
prod4.color = "amarelo";
prod4.showInWeb = Product.STATUS.SHOW;
prod4.tags = ["azul", "bau", "chassis"];
prod4.classification = "SUPER";
prod4.category = "AUTOMOTIVA";

function getCategory() {
  productsList.map((p) => {
    if (p.category !== undefined) {
      !categoryList.includes(p.category) ? categoryList.push(p.category) : null;
    }
  });
  return categoryList;
}

function getClassification() {
  productsList.map((p) => {
    if (p.classification !== undefined) {
      !classificationList.includes(p.classification)
        ? classificationList.push(p.classification)
        : null;
    }
  });
  return classificationList;
}

export { getCategory, getClassification, productsList };
