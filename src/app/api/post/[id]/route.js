import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  const id = params.id;

  const post = await prisma.post.delete({
    where: { id },
  });

  //   console.log({ id });
  return NextResponse.json(post);
}
