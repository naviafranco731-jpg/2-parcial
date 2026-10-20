import './HeroText.css';

export default function HeroText({ title, subtitle }) {
  return (
    <div className="hero-text">
      <h2 className="hero-text__title">{title}</h2>
      <p className="hero-text__subtitle">{subtitle}</p>
    </div>
  );
}