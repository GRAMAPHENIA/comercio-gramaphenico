"use client";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button className="text-red-400 border-2 border-red-500 rounded-full bg-red-500/30 px-4 py-2 mt-20" onClick={handleClick}>
      Borrar
    </button>
  );
}
