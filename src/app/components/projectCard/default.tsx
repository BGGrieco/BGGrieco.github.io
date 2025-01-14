import "./default.scss";

export default function ProjectCard({ title, subTitle, imageUrl }) {
  return (
      <div className="card projectCard">
        <span>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </span>
        <img className="centerImage" src={imageUrl} />
        <img className="arrow" src="/arrow.svg" />
      </div>
  );
}
