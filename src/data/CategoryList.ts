import CategoryProductsModel from "@/core/CategoryProductsModel";

const categoriesList: CategoryProductsModel[] = [];

const cat1 = CategoryProductsModel.createEmpty();
categoriesList.push(cat1);
cat1.category = "AUTOMOTIVA";
cat1.classification = ["COMUM", "CONCENTRADA", "SUPER", "ACABAMENTO"];

const cat2 = CategoryProductsModel.createEmpty();
categoriesList.push(cat2);
cat2.category = "INDUSTRIAL";
cat2.classification = ["COMUM", "CONCENTRADA", "SUPER", "ACABAMENTO"];

export { categoriesList };
