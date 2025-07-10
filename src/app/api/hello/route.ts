import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Olá, esta é a estrutura padrão de API!' });
} 