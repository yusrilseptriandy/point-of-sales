interface buttonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  onClick,
  className,
  children,
  type,
  disabled,
}: buttonProps) => {
  return (
    <button
      className={`bg-biru active:bg-[#0d4576] text-white font-bold
                px-4 
                py-2 
                w-full
                h-11
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
