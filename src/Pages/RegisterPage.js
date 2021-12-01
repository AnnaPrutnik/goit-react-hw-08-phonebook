import { RegistrationForm } from '../components/Forms';
import Section from '../components/Section/Section';

export default function RegistrationPage() {
  return (
    <div className="container">
      <Section title="Registration">
        <RegistrationForm />
      </Section>
    </div>
  );
}
