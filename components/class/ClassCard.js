const ClassCard = ({ post }) => {
  const { title, slug, updated } = post.fields;

  return (
    <div>
      <h1>{title}</h1>
      <p>{updated}</p>
    </div>
  );
};

export default ClassCard;
