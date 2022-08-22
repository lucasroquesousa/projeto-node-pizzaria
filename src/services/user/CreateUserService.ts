import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //verificar se o cliente envoiou o email
    if (!email) {
      throw new Error("Email incorreto");
    }
    //verificar se esse email já está cadastrado na plataforma
    const userAlredyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlredyExists) {
      throw new Error("o usuário ja existe");
    }

    return { name: name, email: email, password: password };
  }
}

export { CreateUserService };
