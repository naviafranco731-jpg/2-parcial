import Button from '../../components/atoms/Button/Button';
import HeroText from '../../components/molecules/HeroText/HeroText';
import shape from '../../assets/shape.png';
import './OnboardingPage.css';

export default function OnboardingPage() {
  return (
    <main className="onboarding">
      <h1 className="onboarding__logo">
        Crypt<span>X</span>
      </h1>

      <img className="onboarding__image" src={shape} alt="Figura 3D CryptX" />

      <HeroText
        title="Jump start your crypto portfolio"
        subtitle="Take your investment portfolio to next level"
      />

      <Button onClick={() => alert('Get Started')}>Get Started</Button>
    </main>
  );
}