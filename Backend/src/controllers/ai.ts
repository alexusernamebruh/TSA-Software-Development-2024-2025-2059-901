import { GoogleGenerativeAI } from '@google/generative-ai';
import { RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const genAI = new GoogleGenerativeAI(process.env.API_KEY || '');

export const getAllChats: RequestHandler = async (req, res) => {
  if (req.query.userId) {
    return res.json(
      await prisma.aiChatHistory.findMany({
        where: {
          userId: +req.query.userId,
        },
      }),
    );
  } else {
    return res.json(400);
  }
};

export const createChat: RequestHandler = async (req, res) => {
  const createdChat = genAI
    .getGenerativeModel({ model: 'gemini-2.0-pro-exp-02-05' })
    .startChat({
      history: [],
      generationConfig: { temperature: 0.7 },
    });
  const result = await createdChat.sendMessage(
    `Please create a title with 20 or less characters for this: ${req.body.userMessage}. Reply with ONLY the title, nothing else.`,
  );
  const response = result.response.text();

  const chat = await prisma.aiChatHistory.create({
    data: {
      userId: req.body.userId,
      content: JSON.stringify([]),
      title: response,
    },
  });

  return res.json(chat);
};

export const chat: RequestHandler = async (req, res) => {
  const history = await prisma.aiChatHistory.findFirst({
    where: { id: req.body.chatId },
  });

  const chat = genAI
    .getGenerativeModel({ model: 'gemini-2.0-pro-exp-02-05' })
    .startChat({
      history: JSON.parse(history!.content).map((msg: { content: any }) => ({
        role: 'user',
        parts: [{ text: msg.content }],
      })),
      generationConfig: { temperature: 0.7 },
    });

  const result = await chat.sendMessage(req.body.userMessage);
  const response = result.response.text();

  await prisma.aiChatHistory.update({
    where: { id: req.body.chatId },
    data: {
      content: JSON.stringify([
        ...JSON.parse(history!.content),
        { role: 'user', content: req.body.userMessage },
        { role: 'ai', content: response },
      ]),
    },
  });

  return res.json(response);
};

export const getChat: RequestHandler = async (req, res) => {
  const chat = await prisma.aiChatHistory.findFirst({
    where: { id: +req.params.id },
  });

  return res.json(chat);
};

export const deleteChat: RequestHandler = async (req, res) => {
  await prisma.aiChatHistory.delete({
    where: { id: +req.params.id },
  });
  return res.json('Deleted chat');
};

export const recommendEvent: RequestHandler = async (req, res) => {
  const { userRequest, userId, chatId } = req.body;
  const events = await prisma.event.findMany({
    where: {
      NOT: [
        {
          users: {
            some: {
              id: userId,
            },
          },
        },
      ],
    },
  });

  const createdChat = genAI
    .getGenerativeModel({ model: 'gemini-2.0-pro-exp-02-05' })
    .startChat({
      history: [],
      generationConfig: { temperature: 0.7 },
    });
  const result = await createdChat.sendMessage(
    `Please recommend events for the user. The user has asked for events based off this: ${userRequest}. If there is none suited to the user's request please say "Unfortunately there is currently no event that meets your request." The data set you will be looking through to find events that suit the user's request is this: ${JSON.stringify(
      events,
    )} \n Please recommend events in this format please: **Title**: [exact title] **Description**: [exact description] **Reason**: [reason why this event is recommended, instead of saying "user's request" say "your request"] For the event description, please replace all instances of the code for a line break(backslash followed by a n) with an actual line break. Separate events with at least 2 line breaks. Do not make up events that aren't in the data set.`,
  );

  const history = await prisma.aiChatHistory.findFirst({
    where: { id: chatId },
  });

  await prisma.aiChatHistory.update({
    where: { id: chatId },
    data: {
      content: JSON.stringify([
        ...JSON.parse(history!.content),
        { role: 'user', content: userRequest },
        { role: 'ai', content: result.response.text() },
      ]),
    },
  });

  return res.json(result.response.text());
};

export const recommendPlace: RequestHandler = async (req, res) => {
  const { userRequest, userId, chatId } = req.body;
  const places = await prisma.place.findMany({
    where: {
      NOT: [
        {
          ownerId: userId,
        },
      ],
    },
  });

  const createdChat = genAI
    .getGenerativeModel({ model: 'gemini-2.0-pro-exp-02-05' })
    .startChat({
      history: [],
      generationConfig: { temperature: 0.7 },
    });
  const result = await createdChat.sendMessage(
    `Please recommend places for the user. The user has asked for places based off this: ${userRequest}. If there is none suited to the user's request please say "Unfortunately there is currently no place that meets your request." The data set you will be looking through to find places that suit the user's request is this: ${JSON.stringify(
      places,
    )} \n Please recommend places in this format please: **Title**: [exact title] **Description**: [exact description] **Reason**: [reason why this place is recommended, instead of saying "user's request" say "your request"] For the place description, please replace all instances of the code for a line break(backslash followed by a n) with an actual line break. Separate places with at least 2 line breaks. Do not make up places that aren't in the data set.`,
  );

  const history = await prisma.aiChatHistory.findFirst({
    where: { id: chatId },
  });

  await prisma.aiChatHistory.update({
    where: { id: chatId },
    data: {
      content: JSON.stringify([
        ...JSON.parse(history!.content),
        { role: 'user', content: userRequest },
        { role: 'ai', content: result.response.text() },
      ]),
    },
  });

  return res.json(result.response.text());
};
