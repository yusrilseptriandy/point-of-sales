import Card from '../molecules/Card/Card';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const CardLogin = () => {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const user = {
    username: 'ysl@ny.com',
    password: '1',
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputEmail === user.username && password === user.password) {
      toast.success('Success login!');
      setTimeout(() => navigate('/'), 2000);
    } else {
      toast.error('Wrong email or password!');
    }
  };

  return (
    <Card
      title="Welcome back"
      emoji="👋"
      description="Sign in to your account"
      className="shadow
                border
                md:items-center
                md:mt-0
                mt-16"
    >
      <form onSubmit={handleLogin} className="gap-5 flex flex-col w-full">
        <Toaster
          toastOptions={{
            className: '',
            style: {
              padding: '12px',
              fontWeight: 'bold',
              backgroundColor: 'rgb(244 244 245)',
              boxShadow:
                ' 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
              borderRadius: '50px',
            },
          }}
        />
        <div className="w-full flex items-center">
          {inputEmail.length > 0 && inputEmail.includes('@') ? (
            <Input
              type="email"
              placeholder="Email address"
              value={inputEmail}
              className="bg-green-100 text-green-700 font-bold  border-2 border-green-500 focus:outline-biru w-full duration-150"
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
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="rounded-3xl active:scale-95">
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
