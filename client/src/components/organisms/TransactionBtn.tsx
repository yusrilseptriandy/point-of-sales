import Button from '../atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const TransactionBtn = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    setTimeout(() => navigate('/transaction'), 100);
  };

  return (
    <div className="flex justify-center items-center">
      <Button
        onClick={handleButtonClick}
        className="text-white fixed flex gap-1 bottom-20 w-min rounded-full shadow-xl active:scale-95"
      >
        <p>2</p>
        <h1>Items</h1>
      </Button>
    </div>
  );
};

export default TransactionBtn;
