interface buttonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  onClick,
  className = 'bg-biru active:bg-[#0d4576] text-white font-bold',
  children,
  type,
  disabled,
}: buttonProps) => {
  return (
    <button
      className={`
                px-4 
                py-2 
                w-full
                h-11
                rounded-lg
                active:w-[99%]
                ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
