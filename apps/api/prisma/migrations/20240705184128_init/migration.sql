-- CreateTable
CREATE TABLE "Movies" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
