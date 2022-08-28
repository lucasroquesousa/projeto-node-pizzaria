import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./middlewares/controllers/user/CreateUserController";
import { AuthUserController } from "./middlewares/controllers/user/AuthUserController";
import { DetailUserContoller } from "./middlewares/controllers/user/DetailUserContoller";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./middlewares/controllers/category/CreateCategoryController";
import { ListCategoryController } from "./middlewares/controllers/category/ListCategoryController";
import { CreateProductsController } from "./middlewares/controllers/products/CreateProductsController";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//Rotas user
router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/userinfo", isAuthenticated, new DetailUserContoller().handle);

//Rotas category

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// Rotas Products

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductsController().handle
);

export { router };
