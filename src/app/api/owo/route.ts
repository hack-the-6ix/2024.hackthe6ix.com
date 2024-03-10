import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(_: NextRequest) {
  return new Response('Hello World');
}
