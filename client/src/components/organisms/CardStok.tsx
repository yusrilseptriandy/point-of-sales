import Card from '../molecules/Card/Card';

interface cardStockProps {
  amount?: number;
  children?: React.ReactNode;
  describe?: string;
  variant?: 'green' | 'blue';
}

const CardStok = ({ amount, describe, variant = 'green' }: cardStockProps) => {
  const cardVariant =
    variant === 'green'
      ? 'bg-gradient-to-r from-green-800 to-green-700 border-[2px] border-green-600'
      : 'bg-gradient-to-r from-[#0084a3] to-[#0594b5] border-[2px] border-[#02aed6]';
  return (
    <Card
      className={`w-[50%] h-min flex justify-center items-center
                text-white ${cardVariant}`}
    >
      <h4 className="text-xl font-extrabold select-none">{amount}</h4>
      <p className="text-sm font-semibold select-none whitespace-nowrap">
        {describe}
      </p>
    </Card>
  );
};

export default CardStok;
