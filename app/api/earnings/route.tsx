import { NextResponse, NextRequest } from 'next/server';
import earnings from './earnings.json';

export function GET(request: NextRequest) {
  return NextResponse.json(earnings);
}