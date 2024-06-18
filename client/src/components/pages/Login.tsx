import CardLogin from '../organisms/CardLogin';

const Login = () => {
  return (
    <div
      className="
            flex
            w-full
            h-screen
            justify-center
            bg-transparent
            p-5
            bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:5rem_4rem]"
    >
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[-10%] rounded-full bg-[rgba(123,109,244,0.5)] opacity-50 blur-[80px] -z-10"></div>
      <CardLogin />
    </div>
  );
};

export default Login;
