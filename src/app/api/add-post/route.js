import { NextResponse } from "next/server";

// Esta función manejará las solicitudes POST
export async function POST(request) {
  // Espera y convierte el cuerpo de la solicitud en un objeto JSON
  const res = await request.json();

  // Extrae las propiedades 'title' (título) y 'content' (contenido) del objeto JSON
  const { title, content } = res;

  console.log({ res });

  // Crea un nuevo registro en la base de datos usando Prisma ORM
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        create: {
          name: "Jhon Doe",
        },
      },
    },
  });

  // Devuelve una respuesta JSON con los datos recibidos
  return NextResponse.json({ data: res });
}
