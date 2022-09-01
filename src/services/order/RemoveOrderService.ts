import prismaClient from "../../prisma";

interface OrederRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrederRequest) {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
    return order;
  }
}

export { RemoveOrderService };
