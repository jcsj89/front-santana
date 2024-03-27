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
prod2.tags = ["azul", "bau", "chassis"];
prod2.classification = "COMUM";
prod2.category = "AUTOMOTIVA";

export { productsList };
