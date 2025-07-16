import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@/shared/generated/prisma';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const neighborhoods = searchParams.getAll('neighborhood');
  const where = neighborhoods.length > 0 ? { neighborhood: { in: neighborhoods } } : undefined;
  const bars = await prisma.barsData.findMany({
    where,
    select: { id: true, title: true, description: true, imageUrl: true, neighborhood: true }
  });

  return NextResponse.json(bars);
} 