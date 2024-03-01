import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json('Listado de recetas')
}

export function POST() {
  return NextResponse.json('Create recetas')
}