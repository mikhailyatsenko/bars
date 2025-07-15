import { NextResponse } from 'next/server';
import { PrismaClient } from '@/shared/generated/prisma';

const prisma = new PrismaClient();

export const GET = async () => {
  console.log("inside api")
  const bars = await prisma.barsData.findMany({
    select: { id: true, title: true, description: true, imageUrl: true }
  });

  return NextResponse.json(bars);
} 