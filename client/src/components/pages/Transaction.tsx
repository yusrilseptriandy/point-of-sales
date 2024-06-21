import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from '../organisms/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button/Button';

const Transaction = () => {
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-full justify-between h-screen flex-col bg-white">
      <Header border="bottom">
        <IoMdArrowRoundBack
          className="text-2xl text-[#494b4a] cursor-pointer"
          onClick={handleGoback}
        />
        <p className="text-lg font-extrabold ml-2">Transaction</p>
      </Header>

      <footer className="w-full h-20 p-3 bg-white flex justify-center">
        <Button className="w-10/12 h-full rounded-full" disabled>
          Confirm
        </Button>
      </footer>
    </div>
  );
};

export default Transaction;
