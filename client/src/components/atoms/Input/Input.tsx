interface inputProps {
  type: string;
  placeholder: string;
  value?: string;
  className?: string;
  label?: string;
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  placeholder,
  value,
  label,
  className = ' bg-white  border border-slate-300 focus:outline-biru w-full rounded-md',
  onChange,
}: inputProps) => {
  return (
    <div className="flex w-full justify-center gap-1 flex-col">
      <label
        className="text-sm font-bold whitespace-nowrap text-slate-600 ml-1"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        className={`
      px-4
      h-11 ${className}`}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
