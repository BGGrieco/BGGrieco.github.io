import "./default.scss";

export default function Button({ text, svg, href }) {
  return (
    <a href={href}>
      <div className="button">
        {svg}
        {text}
      </div>
    </a>
  );
}
