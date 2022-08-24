import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products/CreateProductsService";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    let banner = "";

    const createProductsService = new CreateProductsService();

    const product = createProductsService.execute({
      name,
      price,
      description,
      banner,
      category_id,
    });

    return res.json(product);
  }
}

export { CreateProductsController };
