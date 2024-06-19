import Card from '../molecules/Card/Card';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const CardLogin = () => {
  const [inputEmail, setInputEmail] = useState<string>('');
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
          {inputEmail.length > 0 && inputEmail.includes('@') ? (
            <Input
              type="email"
              placeholder="Email address"
              value={inputEmail}
              className="bg-green-100 text-green-700 font-bold  border-2 border-green-500 focus:outline-biru w-full"
              onChange={(e) => setInputEmail(e.target.value)}
            />
          ) : (
            <Input
              type="email"
              placeholder="Email address"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          )}
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
