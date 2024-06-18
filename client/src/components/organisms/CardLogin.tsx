import Card from '../molecules/Card/Card';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import { Link } from 'react-router-dom';

const CardLogin = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('login');
  };
  return (
    <Card
      title="Welcome back"
      emoji="👋"
      description="Sign in to your account"
      className="shadow-sm
                md:items-center
                md:mt-0
                mt-16"
    >
      <form onSubmit={handleLogin} className="gap-5 flex flex-col w-full">
        <div className="w-full flex items-center">
          <Input type="email" placeholder="Email address" />
        </div>
        <Input type="password" placeholder="Password" />
        <Button type="submit" className="rounded-3xl">
          Login
        </Button>
        <div className="flex justify-center gap-1 items-center">
          <p className="text-sm text-slate-600">Don't have an account? </p>
          <Link to="/register" className="text-biru text-sm font-bold">
            Register
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default CardLogin;
