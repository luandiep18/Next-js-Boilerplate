import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = { matcher: [] };

export async function middleware(_request: NextRequest) {
  return NextResponse.next();
}
