import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); //borra todo

  await prisma.todo.createMany({
    data: [
      { descripcion: "pepe se comio el loro", complete: true },
      { descripcion: "Simon se callo de la bici" },
      { descripcion: "maria nose" },
    ],
  });

  return NextResponse.json({ message: "Seed Complete" });
}
