interface cardProps {
  title?: string;
  description?: string;
  className?: string;
  emoji?: string;
  children?: React.ReactNode;
}
const Card = ({
  title,
  description,
  children,
  className,
  emoji,
}: cardProps) => {
  return (
    <div
      className={`w-96 
                h-min
                p-5
                bg-white 
                rounded-xl
                flex-col
                items-center
                gap-5
                flex
                ${className}
                `}
    >
      <h1 className="text-3xl font-extrabold tracking-tight flex gap-1">
        {title}
        <p className="animate-pulse">{emoji}</p>
      </h1>
      <p className="text-slate-500 text-sm font-semibold ">{description}</p>

      {children}
    </div>
  );
};

export default Card;
