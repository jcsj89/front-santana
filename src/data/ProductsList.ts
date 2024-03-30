import Product from "@/core/ProductModel";

const productsList: Product[] = [];

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
prod2.tags = ["azul", "limpa bau", "chassis", "alcalino"];
prod2.classification = "COMUM";
prod2.category = "AUTOMOTIVA";

const prod3 = Product.createEmpty();
productsList.push(prod3);
prod3.description = "Sanq Mol";
prod3.dilution = "1:10";
prod3.dilutionPercent = 1;
prod3.color = "amarelo";
prod3.showInWeb = Product.STATUS.SHOW;
prod3.tags = ["amarelo", "bau", "chassis"];
prod3.classification = "COMUM";
prod3.category = "AUTOMOTIVA";

const prod4 = Product.createEmpty();
productsList.push(prod4);
prod4.description = "Samix LS";
prod4.dilution = "1:40";
prod4.dilutionPercent = 1;
prod4.color = "amarelo";
prod4.showInWeb = Product.STATUS.SHOW;
prod4.tags = ["azul", "bau", "chassis"];
prod4.classification = "CONCENTRADA";
prod4.category = "AUTOMOTIVA";

const prod5 = Product.createEmpty();
productsList.push(prod5);
prod5.description = "ativado ls";
prod5.dilution = "1:100";
prod5.dilutionPercent = 1;
prod5.color = "roxo";
prod5.showInWeb = Product.STATUS.SHOW;
prod5.tags = ["azul", "bau", "chassis"];
prod5.classification = "CONCENTRADA";
prod5.category = "AUTOMOTIVA";

const prod6 = Product.createEmpty();
productsList.push(prod6);
prod6.description = "Samix 220";
prod6.dilution = "1:100";
prod6.dilutionPercent = 1;
prod6.color = "amarelo";
prod6.showInWeb = Product.STATUS.SHOW;
prod6.tags = ["azul", "bau", "chassis"];
prod6.classification = "SUPER";
prod6.category = "AUTOMOTIVA";

const prod7 = Product.createEmpty();
productsList.push(prod7);
prod7.description = "ativado 220";
prod7.dilution = "1:100";
prod7.dilutionPercent = 1;
prod7.color = "amarelo";
prod7.showInWeb = Product.STATUS.SHOW;
prod7.tags = ["azul", "bau", "chassis"];
prod7.classification = "SUPER";
prod7.category = "AUTOMOTIVA";

const prod8 = Product.createEmpty();
productsList.push(prod8);
prod8.description = "ativado 220";
prod8.dilution = "1:100";
prod8.dilutionPercent = 1;
prod8.color = "amarelo";
prod8.showInWeb = Product.STATUS.SHOW;
prod8.tags = ["azul", "bau", "chassis"];
prod8.classification = "";
prod8.category = "INDUSTRIAL";

function getCategory(productsList: Product[]) {
  const categoryList: string[] = [];
  productsList.map((p) => {
    if (p.category !== undefined && p.showInWeb) {
      !categoryList.includes(p.category) ? categoryList.push(p.category) : null;
    }
  });
  return categoryList;
}

function getClassification(productsList: Product[]) {
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

export { getCategory, getClassification, productsList };
