import { RequestHandler } from 'express';
import { prisma } from '..';

export const createPlace: RequestHandler = async (req, res) => {
  const { name, description, address, city, state, ownerId, categoryId } =
    req.body;
  const place = await prisma.place.create({
    data: {
      name,
      description,
      address,
      city,
      state,
      owner: { connect: { id: ownerId } },
      category: { connect: { id: categoryId } },
    },
  });
  return res.json(place);
};

export const getPlaces: RequestHandler = async (req, res) => {
  const places = await prisma.place.findMany({
    include: {
      owner: true,
      category: true,
      ratings: { include: { author: true } },
    },
  });
  return res.json(places);
};

export const getPlacesByOwnerId: RequestHandler = async (req, res) => {
  const { ownerId } = req.params;
  const places = await prisma.place.findMany({
    where: {
      ownerId: Number(ownerId),
    },
    include: {
      owner: true,
      category: true,
      ratings: { include: { author: true } },
    },
  });
  return res.json(places);
};

export const getPlaceById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const place = await prisma.place.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      owner: true,
      category: true,
      ratings: true,
    },
  });
  return res.json(place);
};
