import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
    try {

        const data = await prisma.recipe.findMany()
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export function POST() {
    return NextResponse.json('Creando recipes')
}