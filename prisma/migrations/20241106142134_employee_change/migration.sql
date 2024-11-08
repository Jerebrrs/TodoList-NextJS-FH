-- CreateTable
CREATE TABLE "Employe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roles" TEXT[] DEFAULT ARRAY[]::TEXT[]
);
