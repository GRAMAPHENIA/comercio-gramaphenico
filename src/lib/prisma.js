import { PrismaClient } from "@prisma/client";

let prisma;

// Verifica si el entorno de ejecución es de producción
if (process.env.NODE_ENV === "production") {
  // Si es producción, crea una nueva instancia del cliente de Prisma
  prisma = new PrismaClient();
} else {
  // Si no es producción (por ejemplo, es desarrollo)
  if (!global.prisma) {
    // Si no hay una instancia global de Prisma, crea una nueva
    global.prisma = new PrismaClient();
  }
  // Asigna la instancia global de Prisma a la variable 'prisma'
  prisma = global.prisma;
}

export default prisma;
