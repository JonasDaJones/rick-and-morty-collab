export default function Entry({ date, title, text, favbutton }) {
  return (
    <article className="entry">
      <div className="date">{date}</div>
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
      <span>{favbutton}</span>
    </article>
  );
}
