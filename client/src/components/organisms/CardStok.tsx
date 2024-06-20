import Card from '../molecules/Card/Card';

interface cardStockProps {
  amount?: number;
  children?: React.ReactNode;
  describe?: 'items' | 'variants';
}

const CardStok = ({ amount, describe }: cardStockProps) => {
  const cardVariant =
    amount === 0
      ? 'bg-gradient-to-r from-green-800 to-green-700 border-[2px] border-green-600'
      : 'bg-gradient-to-r from-rose-700 to-rose-600 border-[2px] border-red-500';
  return (
    <Card
      className={`w-[50%] h-min flex justify-center items-center
                text-white ${cardVariant}`}
    >
      <h4 className="text-xl font-extrabold select-none">{amount}</h4>
      <p className="text-sm font-semibold select-none">{`${describe} out of stock`}</p>
    </Card>
  );
};

export default CardStok;
