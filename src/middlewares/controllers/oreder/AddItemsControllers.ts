import { Request, Response } from "express";
import { AddItemsSevice } from "../../../services/order/AddItemsSevice";

class AddItemsController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body;

    const addItem = new AddItemsSevice();

    const order = await addItem.execute({
      order_id,
      product_id,
      amount,
    });
    console.log(order);
    return res.json(order);
  }
}

export { AddItemsController };
