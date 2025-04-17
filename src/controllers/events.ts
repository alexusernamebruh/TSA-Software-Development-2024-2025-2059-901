import { RequestHandler } from 'express';
import { prisma } from '..';

export const createEvent: RequestHandler = async (req, res) => {
  const {
    city,
    state,
    address,
    startDate,
    endDate,
    title,
    description,
    authorId,
  } = req.body;

  const event = await prisma.event.create({
    data: {
      city,
      state,
      address,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      title,
      description,
      author: { connect: { id: authorId } },
    },
  });
  return res.json(event);
};

export const getEvents: RequestHandler = async (req, res) => {
  const events = await prisma.event.findMany({
    include: {
      author: true,
      users: true,
    },
  });
  return res.json(events);
};

export const getEventsByOwnerId: RequestHandler = async (req, res) => {
  const events = await prisma.event.findMany({
    where: {
      authorId: +req.params.id,
    },
    include: {
      author: true,
      users: true,
    },
  });
  return res.json(events);
};

export const getEventById: RequestHandler = async (req, res) => {
  const event = await prisma.event.findFirst({
    where: {
      id: +req.params.id,
    },
    include: {
      author: true,
      users: true,
    },
  });
  return res.json(event);
};

export const signUpForEvent: RequestHandler = async (req, res) => {
  const { eventId, userId } = req.body;

  const event = await prisma.event.update({
    where: {
      id: +eventId,
    },
    data: {
      users: {
        connect: { id: +userId },
      },
    },
  });
  return res.json(event);
};

export const unSignupForEvent: RequestHandler = async (req, res) => {
  const { eventId, userId } = req.body;
  const event = await prisma.event.update({
    where: {
      id: +eventId,
    },
    data: {
      users: {
        disconnect: { id: +userId },
      },
    },
  });
  return res.json(event);
};
