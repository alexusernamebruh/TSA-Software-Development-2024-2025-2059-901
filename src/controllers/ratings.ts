import { RequestHandler } from 'express';
import { prisma } from '..';

export const createRating: RequestHandler = async (req, res) => {
  const { rating, comment, placeId, authorId } = req.body;
  const newRating = await prisma.rating.create({
    data: {
      rating,
      comment,
      place: { connect: { id: placeId } },
      author: { connect: { id: authorId } },
    },
  });

  const place = await prisma.place.findFirst({
    where: {
      id: placeId,
    },
  });
  if (place !== null) {
    await prisma.place.update({
      where: {
        id: placeId,
      },
      data: {
        ratingsCount: place.ratingsCount + 1,
        ratingsSum: place.ratingsSum + rating,
        ratingsAverage: (place.ratingsSum + rating) / (place.ratingsCount + 1),
      },
    });
  }

  return res.json(newRating);
};

