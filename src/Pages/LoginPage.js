import { LoginForm } from '../components/Forms';
import Section from '../components/Section/Section';

export default function LoginPage() {
  return (
    <div className="container">
      <Section title="Login">
        <LoginForm />
      </Section>
    </div>
  );
}
