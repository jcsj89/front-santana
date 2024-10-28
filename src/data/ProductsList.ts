import Product from "@/core/ProductModel";

const productsList: Product[] = [];

const prod1 = Product.createEmpty();
productsList.push(prod1);
prod1.description = "Ativado 110";
prod1.dilution = "1:10";
prod1.dilutionPercent = 10;
prod1.color = "roxo";
prod1.tags = ["roxo", "bau", "aluminio"];
prod1.showInWeb = Product.STATUS.SHOW;
prod1.classification = "COMUM";
prod1.category = "AUTOMOTIVA";
prod1.photos = ["/img/products/at.ls.300.png"];

const prod2 = Product.createEmpty();
productsList.push(prod2);
// prod2.active = Product.STATUS.INACTIVE;
prod2.description = "sanq chassis 110";
prod2.dilution = "1:10";
prod2.dilutionPercent = 10;
prod2.color = "azul";
prod2.showInWeb = Product.STATUS.SHOW;
prod2.tags = ["azul", "limpa bau", "chassis", "alcalino"];
prod2.classification = "COMUM";
prod2.category = "AUTOMOTIVA";
prod2.modoDeUso =
  "Aplicar por pulverização sobre toda a superfície desejada. Esfregar-se necessário com o auxílio de um pano ou esfregão, em seguida enxaguar com jatos d'água em abundância até a remoção total dos resíduos. Recomenda-se o uso correto de EPI's.";
prod2.indicacaoDeUso =
  "Produto indicado para limpeza atravéz de desincrustação na linha automóveis, tendo como principal função, a remoção de incrustações aderidas em superfícies metálicas.";
prod2.photos = ["/img/products/sanq.chassis.110.png"];

const prod3 = Product.createEmpty();
productsList.push(prod3);
prod3.description = "Sanq Mol";
prod3.dilution = "1:10";
prod3.dilutionPercent = 10;
prod3.color = "amarelo";
prod3.showInWeb = Product.STATUS.SHOW;
prod3.tags = ["amarelo", "bau", "chassis"];
prod3.classification = "COMUM";
prod3.category = "AUTOMOTIVA";
prod3.photos = ["/img/products/sanq.mol.png"];

const prod4 = Product.createEmpty();
productsList.push(prod4);
prod4.description = "Samix LS";
prod4.dilution = "1:40";
prod4.dilutionPercent = 40;
prod4.color = "amarelo";
prod4.showInWeb = Product.STATUS.SHOW;
prod4.tags = ["azul", "bau", "chassis"];
prod4.classification = "CONCENTRADA";
prod4.category = "AUTOMOTIVA";
prod4.photos = ["/img/products/samix.220.png"];

const prod5 = Product.createEmpty();
productsList.push(prod5);
prod5.description = "ativado ls";
prod5.dilution = "1:100";
prod5.dilutionPercent = 40;
prod5.color = "roxo";
prod5.showInWeb = Product.STATUS.SHOW;
prod5.tags = ["azul", "bau", "chassis"];
prod5.classification = "CONCENTRADA";
prod5.category = "AUTOMOTIVA";
prod5.photos = ["/img/products/at.ls.300.png"];

const prod6 = Product.createEmpty();
productsList.push(prod6);
prod6.description = "Samix 220";
prod6.dilution = "1:100";
prod6.dilutionPercent = 100;
prod6.color = "amarelo";
prod6.showInWeb = Product.STATUS.SHOW;
prod6.tags = ["azul", "bau", "chassis"];
prod6.classification = "SUPER";
prod6.category = "AUTOMOTIVA";
prod6.photos = ["/img/products/mult.max.png"];

const prod7 = Product.createEmpty();
productsList.push(prod7);
prod7.description = "ativado 220";
prod7.dilution = "1:100";
prod7.dilutionPercent = 100;
prod7.color = "amarelo";
prod7.showInWeb = Product.STATUS.SHOW;
prod7.tags = ["azul", "bau", "chassis"];
prod7.classification = "SUPER";
prod7.category = "AUTOMOTIVA";
prod7.photos = ["/img/products/pneu.brill.png"];

const prod8 = Product.createEmpty();
productsList.push(prod8);
prod8.description = "R2 544";
prod8.dilution = "1:100";
prod8.dilutionPercent = 1;
prod8.color = "amarelo";
prod8.showInWeb = Product.STATUS.SHOW;
prod8.tags = ["azul", "bau", "chassis"];
prod8.classification = "";
prod8.category = "INDUSTRIAL";
prod8.photos = ["/img/products/sanq.mol.png"];

const prod9 = Product.createEmpty();
productsList.push(prod9);
prod9.description = "R2 768";
prod9.dilution = "1:100";
prod9.dilutionPercent = 1;
prod9.color = "amarelo";
prod9.showInWeb = Product.STATUS.SHOW;
prod9.tags = ["azul", "bau", "chassis"];
prod9.classification = "";
prod9.category = "INDUSTRIAL";
prod9.photos = ["/img/products/lm.200.png"];

const prod10 = Product.createEmpty();
productsList.push(prod10);
prod10.description = "R2 168";
prod10.dilution = "1:100";
prod10.dilutionPercent = 1;
prod10.color = "amarelo";
prod10.showInWeb = Product.STATUS.SHOW;
prod10.tags = ["azul", "bau", "chassis"];
prod10.classification = "";
prod10.category = "INDUSTRIAL";
prod9.photos = ["/img/products/site.det.mol.2.png"];

const prod11 = Product.createEmpty();
productsList.push(prod11);
prod11.description = "PNEU BRILL";
prod11.dilution = "1:1";
prod11.dilutionPercent = 100;
prod11.color = "amarelo";
prod11.showInWeb = Product.STATUS.SHOW;
prod11.tags = ["azul", "bau", "chassis"];
prod11.classification = "";
prod11.category = "ACABAMENTO";

const prod12 = Product.createEmpty();
productsList.push(prod12);
prod12.description = "MULT MAX";
prod12.dilution = "1:1";
prod12.dilutionPercent = 100;
prod12.color = "amarelo";
prod12.showInWeb = Product.STATUS.SHOW;
prod12.tags = ["azul", "bau", "chassis"];
prod12.classification = "";
prod12.category = "ACABAMENTO";

const prod13 = Product.createEmpty();
productsList.push(prod13);
prod13.description = "SILICONE";
prod13.dilution = "1:1";
prod13.dilutionPercent = 100;
prod13.color = "amarelo";
prod13.showInWeb = Product.STATUS.SHOW;
prod13.tags = ["azul", "bau", "chassis"];
prod13.classification = "";
prod13.category = "ACABAMENTO";

const prod14 = Product.createEmpty();
productsList.push(prod14);
prod14.description = "SILICONE ROSA";
prod14.dilution = "1:1";
prod14.dilutionPercent = 100;
prod14.color = "amarelo";
prod14.showInWeb = Product.STATUS.SHOW;
prod14.tags = ["azul", "bau", "chassis"];
prod14.classification = "";
prod14.category = "ACABAMENTO";

const prod15 = Product.createEmpty();
productsList.push(prod15);
prod15.description = "CERA";
prod15.dilution = "1:1";
prod15.dilutionPercent = 100;
prod15.color = "amarelo";
prod15.showInWeb = Product.STATUS.SHOW;
prod15.tags = ["azul", "bau", "chassis"];
prod15.classification = "";
prod15.category = "ACABAMENTO";

const prod16 = Product.createEmpty();
productsList.push(prod16);
prod16.description = "ODORIZANTE";
prod16.dilution = "1:1";
prod16.dilutionPercent = 100;
prod16.color = "amarelo";
prod16.showInWeb = Product.STATUS.SHOW;
prod16.tags = ["azul", "bau", "chassis"];
prod16.classification = "";
prod16.category = "ACABAMENTO";

export { productsList };
