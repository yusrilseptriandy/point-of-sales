interface inputProps {
  type: string;
  placeholder: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  placeholder,
  value,
  className = ' bg-white  border border-slate-300 focus:outline-biru w-full',
  onChange,
}: inputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`
       rounded-md
      px-4
      h-11 ${className}`}
      onChange={onChange}
    />
  );
};

export default Input;
