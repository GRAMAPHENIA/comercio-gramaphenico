"use client";

import styles from "@/app/page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  // Declaración de estados para el título y el contenido del post
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter(); // Inicializa el enrutador para manejar la navegación

  // Función para manejar cambios en el campo de título
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Función para manejar cambios en el campo de contenido
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realiza una solicitud POST a la API para agregar un nuevo post
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }), // Envía los datos del post como JSON
      });

      router.refresh(); // Refresca la página actual para mostrar el nuevo post
    } catch (error) {
      console.error(error); // Muestra errores en la consola si algo sale mal
    }

    // Limpia los campos del formulario después de enviarlo
    setTitle("");
    setContent("");
  };

  return (
    <main className={styles.main}>
      <Link
        className="border rounded-md p-4 mb-8 bg-blue-400/20 hover:bg-blue-400/60"
        href={"/"}
      >
        View Feed
      </Link>
      <h1>Add Post</h1>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <div className="text-white bg-slate-900 bg-opacity-10 my-4 flex flex-col items-start">
          <label className="" htmlFor="title">
            Title:
          </label>
          <input
            className="text-white bg-slate-900 bg-opacity-10 my-4 border rounded-[3px] p-4"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="text-white bg-slate-900 bg-opacity-10 flex flex-col items-start">
          <label className="" htmlFor="content">
            Content:
          </label>
          <textarea
            className="text-white bg-slate-900 bg-opacity-10 my-4 border rounded-[3px] p-4"
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button
          className="text-white bg-green-300/20 hover:bg-green-300/60 my-4 border rounded-[3px] p-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
