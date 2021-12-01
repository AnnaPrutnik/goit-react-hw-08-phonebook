import Section from '../components/Section/Section';
import image from '../images/cotacts.png';

export default function HomePage() {
  return (
    <div className="container">
      <Section title="Welcome to PhoneBook">
        <div className="homeContent">
          <p className="imgTitle">Get your contacts any time</p>
          <img src={image} alt="phonebook" className="image" width="500" />
        </div>
      </Section>
    </div>
  );
}
