import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/shared/generated/prisma';

const prisma = new PrismaClient();

export const barsCatalogRoute = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const neighborhoods = searchParams.getAll("neighborhoods");
  const where = neighborhoods.length > 0 ? { neighborhood: { in: neighborhoods } } : undefined;
  const bars = await prisma.barsData.findMany({
    where,
    select: { id: true, title: true, description: true, imageUrl: true, neighborhood: true }
  });

  return NextResponse.json(bars);
} 