import { RegisterForm } from 'components/registerForm/registerForm';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
