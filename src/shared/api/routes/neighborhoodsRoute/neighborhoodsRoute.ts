import { NextResponse } from 'next/server';
import { PrismaClient } from '@/shared/generated/prisma';

const prisma = new PrismaClient();

export const neighborhoodsRoute = async () => {
  const neighborhoods = await prisma.barsData.findMany({
    where: { neighborhood: { not: null } },
    select: { neighborhood: true },
    distinct: ['neighborhood'],
  });
  const result = neighborhoods
    .map(n => n.neighborhood)
    .filter((n): n is string => Boolean(n));
  return NextResponse.json(result);
};

