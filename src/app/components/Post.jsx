import DeletePostButton from "./DeletePostButton";

export default function Post({ id, title, content, authorName }) {
  return (
    <>
      <div className="border border-white p-4 m-3">
        <h3>{authorName}</h3>
        <h4>{title}</h4>
        <p>{content}</p>
        <DeletePostButton postId={id} />
      </div>
    </>
  );
}
