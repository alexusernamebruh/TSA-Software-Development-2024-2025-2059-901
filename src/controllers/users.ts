import { RequestHandler } from 'express';
import { prisma } from '..';

export const createUser: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  const usernameTaken = await prisma.user.findFirst({
    where: { username: req.body.username },
  });
  if (usernameTaken === null) {
    const employer = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return res.json({
      id: employer?.id,
      username: employer?.username,
    });
  }
};

export const signIn: RequestHandler = async (req, res) => {
  const user = await prisma.user.findFirst({
    where: { username: req.body.username },
  });
  if (user === null) {
    return res.json('User does not exist');
  } else {
    if (req.body.password === user?.password) {
      return res.json({
        id: user?.id,
        username: user?.username,
      });
    }
  }
};

export const getUserById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: { id: +id },
    include: {
      events: true,
      createdEvents: true,
      ownedPlaces: true,
      ratings: true,
    },
  });

  return res.json(user);
};
