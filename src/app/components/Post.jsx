import DeletePostButton from "./DeletePostButton";

export default function Post({ id, title, content, authorName }) {
  return (
    <>
      <div className="border-2 border-white m-3 w-[500px] p-10 rounded-xl bg-slate-100/10">
        <h3 className="mb-10 text-blue-300">
          <span className="text-blue-400/60">⌨</span> {authorName}
        </h3>
        <h4 className="text-4xl mb-4">{title}</h4>
        <p>{content}</p>
        <DeletePostButton postId={id} />
      </div>
    </>
  );
}
