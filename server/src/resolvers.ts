import { IResolvers } from "apollo-server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers: IResolvers = {
  Query: {
    notes: async () => {
      const main = async () => {
        return await prisma.notes.findMany({
          orderBy: {
            id: "desc",
          },
        });
      };
      return main()
        .catch((e) => {
          throw e;
        })
        .finally(async () => {
          await prisma.$disconnect();
        });
    },
  },
  Mutation: {
    createNote: async (parent, { note: { title, content } }) => {
      const date = new Date();
      const main = async () => {
        return await prisma.notes.create({
          data: {
            title,
            content,
            createdat: `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`,
            updatedat: `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`,
          },
        });
      };
      return main()
        .catch((e) => {
          throw e;
        })
        .finally(async () => {
          await prisma.$disconnect();
        });
    },
    updateNote: async (parent, { note: { title, content }, id }) => {
      const date = new Date();
      const main = async () => {
        return await prisma.notes.update({
          data: {
            title,
            content,
            updatedat: `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`,
          },
          where: {
            id: parseInt(id, 10),
          },
        });
      };
      return main()
        .catch((e) => {
          throw e;
        })
        .finally(async () => {
          await prisma.$disconnect();
        });
    },
    deleteNote: async (parent, { id }) => {
      const main = async () => {
        return await prisma.notes.delete({
          where: { id: parseInt(id, 10) },
        });
      };
      return main()
        .catch((e) => {
          throw e;
        })
        .finally(async () => {
          await prisma.$disconnect();
        });
    },
  },
};

export default resolvers;
