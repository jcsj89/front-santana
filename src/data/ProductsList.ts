import { DocumentModel } from "@/core/DocumentModel";
import { PackageModel } from "@/core/PackageModel";
import { Product } from "@/core/ProductModel";

const productsList: Product[] = [];

const prod1 = Product.createEmpty();
productsList.push(prod1);
prod1.description = "Ativado 110";
prod1.dilution =
    "Para cada 01 litro do produto diluir em até 10 litros de água";
prod1.dilutionPercent = 10;
prod1.concentrationLevel = "comum";
prod1.color = "roxo";
prod1.tags = ["roxo", "bau", "aluminio"];
prod1.showInWeb = Product.STATUS.SHOW;
prod1.photos = ["/img/products/800/ativado.110.5.h800.png"]; // OK
prod1.line = "automotiva";
prod1.category = "desincrustante";
prod1.classification = "convencional";
prod1.ph = 4;

const prod2 = Product.createEmpty();
productsList.push(prod2);
prod2.active = Product.STATUS.ACTIVE;
prod2.description = "sanq chassis 110";
prod2.dilution =
    "Para cada 01 litro do produto diluir em até 10 litros de água";
prod2.dilutionPercent = 10;
prod2.color = "azul";
prod2.showInWeb = Product.STATUS.HIDE;
prod2.tags = ["azul", "limpa bau", "chassis", "alcalino"];
prod2.modoDeUso =
    "Aplicar por pulverização sobre toda a superfície desejada. Esfregar-se necessário com o auxílio de um pano ou esfregão, em seguida enxaguar com jatos d'água em abundância até a remoção total dos resíduos. Recomenda-se o uso correto de EPI's.";
prod2.indicacaoDeUso =
    "Produto indicado para limpeza atravéz de desincrustação na linha automóveis, tendo como principal função, a remoção de incrustações aderidas em superfícies metálicas.";
prod2.photos = ["/img/products/sanq.chassis.110.png"];
prod2.ph = 10;
prod2.line = "automotiva";
prod2.category = "desengraxante";
prod2.classification = "convencional";
prod2.concentrationLevel = "comum";

const prod3 = Product.createEmpty();
productsList.push(prod3);
// prod3.active = Product.STATUS.INACTIVE;
prod3.description = "Sanq Mol";
prod3.dilution =
    "Para cada 01 litro do produto diluir em até 10 litros de água";
prod3.dilutionPercent = 10;
prod3.color = "amarelo";
prod3.showInWeb = Product.STATUS.SHOW;
prod3.tags = ["amarelo", "bau", "chassis"];
prod3.photos = ["/img/products/800/sanq.mol.5.h800.png"];
prod3.line = "AUTOMOTIVA";
prod3.category = "NEUTRO";
prod3.classification = "convencional";
prod3.concentrationLevel = "comum";
prod3.ph = 7;

const prod4 = Product.createEmpty();
productsList.push(prod4);
prod4.description = "Samix LS";
prod4.dilution =
    "Para cada 01 litro do produto diluir em até 40 litros de água";
prod4.dilutionPercent = 2.5;
prod4.color = "amarelo";
prod4.showInWeb = Product.STATUS.SHOW;
prod4.tags = ["azul", "bau", "chassis"];
prod4.photos = ["/img/products/800/samix.ls.5.h800.png"]; // OK
prod4.line = "AUTOMOTIVA";
prod4.category = "desengraxante";
prod4.classification = "concentrado";
prod4.concentrationLevel = "concentrado";
prod4.ph = 11;

const prod5 = Product.createEmpty();
productsList.push(prod5);
prod5.description = "Ativado LS";
prod5.dilution =
    "Para cada 01 litro do produto diluir em até 40 litros de água";
prod5.dilutionPercent = 2.5;
prod5.color = "roxo";
prod5.showInWeb = Product.STATUS.SHOW;
prod5.tags = ["azul", "bau", "chassis"];
prod5.photos = ["/img/products/800/ativado.ls.5.h800.png"]; // OK
prod5.line = "automotiva";
prod5.category = "desincrustante";
prod5.classification = "concentrado";
prod5.concentrationLevel = "concentrado";
prod5.ph = 3;

const prod6 = Product.createEmpty();
productsList.push(prod6);
prod6.description = "Samix 220";
prod6.dilution = "1:100";
prod6.dilutionPercent = 1;
prod6.color = "amarelo";
prod6.showInWeb = Product.STATUS.HIDE;
prod6.tags = ["azul", "bau", "chassis"];
prod6.classification = "super";
prod6.category = "desengraxante";
prod6.line = "automotiva";
prod6.concentrationLevel = "super";
prod6.photos = ["/img/products/mult.max.png"];
prod6.ph = 13;

const prod7 = Product.createEmpty();
productsList.push(prod7);
prod7.description = "ativado 220";
prod7.dilution = "1:100";
prod7.dilutionPercent = 1;
prod7.color = "roxo";
prod7.showInWeb = Product.STATUS.HIDE;
prod7.tags = ["azul", "bau", "chassis"];
prod7.concentrationLevel = "super";
prod7.line = "automotiva";
prod7.category = "desincrustante";
prod7.classification = "super";
prod7.photos = ["/img/products/pneu.brill.png"];
prod7.ph = 1;

const prod8 = Product.createEmpty();
productsList.push(prod8);
prod8.description = "R2 544";
prod8.dilution = "1:100";
prod8.dilutionPercent = 1;
prod8.color = "amarelo";
prod8.showInWeb = Product.STATUS.HIDE;
prod8.tags = ["azul", "bau", "chassis"];
prod8.line = "industrial";
prod8.category = "";
prod8.classification = "";
prod8.photos = ["/img/products/sanq.mol.png"];

const prod9 = Product.createEmpty();
productsList.push(prod9);
prod9.description = "R2 768";
prod9.dilution = "1:100";
prod9.dilutionPercent = 1;
prod9.color = "branco";
prod9.showInWeb = Product.STATUS.HIDE;
prod9.tags = ["azul", "bau", "chassis"];
prod9.line = "industrial";
prod9.classification = "";
prod9.category = "";
prod9.photos = ["/img/products/lm.200.png"];

const prod10 = Product.createEmpty();
productsList.push(prod10);
prod10.description = "R2 168";
prod10.dilution = "1:100";
prod10.dilutionPercent = 1;
prod10.color = "branco";
prod10.showInWeb = Product.STATUS.HIDE;
prod10.tags = ["azul", "bau", "chassis"];
prod10.line = "industrial";
prod10.category = "";
prod10.classification = "";
prod10.photos = ["/img/products/site.det.mol.2.png"];

const prod11 = Product.createEmpty();
productsList.push(prod11);
prod11.description = "PNEU BRILL";
prod11.dilution = "1:1";
prod11.dilutionPercent = 100;
prod11.color = "amarelo";
prod11.showInWeb = Product.STATUS.SHOW;
prod11.line = "automotiva";
prod11.category = "pneu";
prod11.classification = "brilho";
prod11.photos = ["/img/products/800/pneu.brill.5.png"]; // OK
prod11.tags = ["azul", "bau", "chassis"];

const prod12 = Product.createEmpty();
productsList.push(prod12);
prod12.description = "MULT MAX";
prod12.dilution = "1:1";
prod12.dilutionPercent = 100;
prod12.color = "verde";
prod12.showInWeb = Product.STATUS.SHOW;
prod12.tags = ["azul", "bau", "chassis"];
prod12.line = "automotiva";
prod12.category = "limpeza";
prod12.classification = "convencional";
prod12.photos = ["/img/products/800/mult.max.5.h800.png"]; // OK

const prod13 = Product.createEmpty();
productsList.push(prod13);
prod13.description = "SILICONE";
prod13.dilution = "1:1";
prod13.dilutionPercent = 100;
prod13.color = "branco";
prod13.showInWeb = Product.STATUS.HIDE;
prod13.tags = ["azul", "bau", "chassis"];
prod13.line = "automotiva";
prod13.category = "painel";
prod13.classification = "";
prod13.photos = ["/img/products/sanq.mol.png"];

const prod14 = Product.createEmpty();
productsList.push(prod14);
prod14.description = "SILICONE ROSA";
prod14.dilution = "1:1";
prod14.dilutionPercent = 60;
prod14.color = "rosa";
prod14.showInWeb = Product.STATUS.HIDE;
prod14.tags = ["azul", "bau", "chassis"];
prod14.line = "automotiva";
prod14.category = "painel";
prod14.classification = "painel";
prod14.photos = ["/img/products/sanq.mol.png"];

const prod15 = Product.createEmpty();
productsList.push(prod15);
prod15.description = "CERA";
prod15.dilution = "1:1";
prod15.dilutionPercent = 51;
prod15.color = "amarelo";
prod15.showInWeb = Product.STATUS.HIDE;
prod15.tags = ["azul", "bau", "chassis"];
prod15.line = "automotiva";
prod15.category = "lataria";
prod15.classification = "";
prod15.photos = ["/img/products/sanq.mol.png"];

const prod16 = Product.createEmpty();
productsList.push(prod16);
prod16.description = "ODORIZANTE";
prod16.dilution = "1:1";
prod16.dilutionPercent = 47;
prod16.color = "azul";
prod16.showInWeb = Product.STATUS.HIDE;
prod16.tags = ["azul", "bau", "chassis"];
prod16.line = "automotiva";
// prod16.category = "aromatizante";
prod16.classification = "";
prod16.photos = ["/img/products/sanq.mol.png"];

const prod17 = Product.createEmpty();
productsList.push(prod17);
// prod17.active = Product.STATUS.INACTIVE;
prod17.description = "Sanq Mol LS";
prod17.dilution =
    "Para cada 01 litro do produto diluir em até 10 litros de água";
prod17.dilutionPercent = 10;
prod17.color = "amarelo";
prod17.showInWeb = Product.STATUS.SHOW;
prod17.tags = ["amarelo", "bau", "chassis"];
prod17.photos = ["/img/products/800/sanq.mol.ls.5.h800.png"]; // ok
prod17.line = "AUTOMOTIVA";
prod17.category = "NEUTRO";
prod17.classification = "concentrado";
prod17.concentrationLevel = "comum";
prod17.ph = 7;

const prod18 = Product.createEmpty();
productsList.push(prod18);
// prod18.active = Product.STATUS.INACTIVE;
prod18.description = "Pro Mol";
prod18.dilution =
    "Para cada 01 litro do produto diluir em até 100 litros de água";
prod18.dilutionPercent = 1;
prod18.color = "amarelo";
prod18.showInWeb = Product.STATUS.SHOW;
prod18.tags = ["amarelo", "bau", "chassis"];
prod18.photos = ["/img/products/800/pro.mol.5.h800.png"]; // ok
prod18.line = "AUTOMOTIVA";
prod18.category = "desengraxante";
prod18.classification = "super";
prod18.concentrationLevel = "super";
prod18.ph = 11;

const prod19 = Product.createEmpty();
productsList.push(prod19);
// prod19.active = Product.STATUS.INACTIVE;
prod19.description = "Ativado 220";
prod19.dilution =
    "Para cada 01 litro do produto diluir em até 100 litros de água";
prod19.dilutionPercent = 1;
prod19.color = "roxo";
prod19.showInWeb = Product.STATUS.SHOW;
prod19.tags = ["roxo", "bau", "desincrustante"];
prod19.photos = ["/img/products/800/at.220.2.h800.png"]; // ok
prod19.line = "AUTOMOTIVA";
prod19.category = "desincrustante";
prod19.classification = "super";
prod19.concentrationLevel = "super";
prod19.ph = 2;

const prod20 = Product.createEmpty();
productsList.push(prod20);
// prod20.active = Product.STATUS.INACTIVE;
prod20.description = "Samix 220";
prod20.dilution =
    "Para cada 01 litro do produto diluir em até 100 litros de água";
prod20.dilutionPercent = 1;
prod20.color = "amarelo";
prod20.showInWeb = Product.STATUS.SHOW;
prod20.tags = ["amarelo", "bau", "desengraxante"];
prod20.photos = ["/img/products/800/samix.220.2.h800.png"]; // ok
prod20.line = "AUTOMOTIVA";
prod20.category = "desengraxante";
prod20.classification = "super";
prod20.concentrationLevel = "super";
prod20.ph = 12;
prod20.addDocument(
    DocumentModel.create({
        type: "Ficha Tecnica",
        description: "Ficha Tecnica Geral",
        version: "1.0",
        anexo: "/pdf/mult.max.pdf",
        author: "Jose Carlos",
    })
)
prod20.addDocument(
    DocumentModel.create({
        type: "FDS",
        description: "Ficha de Dados com Segurança",
        version: "1.0",
        anexo: "/pdf/mult.max.pdf",
        author: "Jose Carlos",
    })
);

prod20.addPackage(
    PackageModel.create({
        description: "Bombona de 50 Litros",
        volume: 50,
        image: "/img/embalagems/50.litros.png",
    })
);
prod20.addPackage(
    PackageModel.create({
        description: "Bombona de 20 Litros",
        volume: 20,
        image: "/img/embalagems/20.litros.png",
    })
);
prod20.addPackage(
    PackageModel.create({
        description: "Bombona de 200 Litros",
        volume: 200,
        image: "/img/embalagems/200.litros.png",
    })
);

export { productsList };
