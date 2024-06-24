interface buttonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  onClick,
  className = 'text-white',
  children,
  type,
  disabled = false,
}: buttonProps) => {
  const disableBtn =
    disabled === true ? 'bg-slate-400 active:bg-slate-400' : '';
  return (
    <button
      className={`bg-biru active:bg-[#0d4576] font-bold
                px-4 
                py-2 
                w-full
                h-11
                ${className} ${disableBtn}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
