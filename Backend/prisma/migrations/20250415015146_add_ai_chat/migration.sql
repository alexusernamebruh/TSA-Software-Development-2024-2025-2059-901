-- CreateTable
CREATE TABLE "aiChatHistory" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "aiChatHistory_pkey" PRIMARY KEY ("id")
);
