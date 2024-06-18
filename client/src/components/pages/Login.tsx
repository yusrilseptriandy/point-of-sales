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
      <div className="absolute bottom-0 left-auto right-0 h-[500px] w-[500px] -translate-x-[0%] md:-translate-x-[60%] translate-y-[-50%] rounded-full bg-[rgba(199,109,244,0.47)] opacity-50 blur-[80px] -z-10"></div>
      <CardLogin />
    </div>
  );
};

export default Login;
