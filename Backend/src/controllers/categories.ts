import { RequestHandler } from 'express';
import { prisma } from '..';

export const createCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;
  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  return res.json(category);
};

export const getAllCategories: RequestHandler = async (req, res) => {
  const categories = await prisma.category.findMany();
  return res.json(categories);
};
