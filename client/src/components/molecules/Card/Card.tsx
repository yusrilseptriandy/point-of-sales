interface cardProps {
  className?: string;
  children?: React.ReactNode;
}
const Card = ({ children, className }: cardProps) => {
  return (
    <div
      className={`w-96 
                h-min
                p-5
                bg-white 
                rounded-xl
                flex-col
                items-center
               
                flex
                ${className}
                `}
    >
      {children}
    </div>
  );
};

export default Card;
