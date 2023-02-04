-- CreateTable
CREATE TABLE "ShortURL" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" VARCHAR(2000),
    "slug" TEXT NOT NULL,

    CONSTRAINT "ShortURL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortURL_slug_key" ON "ShortURL"("slug");

-- CreateIndex
CREATE INDEX "ShortURL_slug_idx" ON "ShortURL"("slug");
