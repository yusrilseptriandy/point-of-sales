import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import Header from '../organisms/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button/Button';
import Input from '../atoms/Input/Input';

const Transaction = () => {
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-full justify-between h-screen flex-col">
      <div>
        <Header border="bottom">
          <IoMdArrowRoundBack
            className="text-2xl text-abu cursor-pointer"
            onClick={handleGoback}
          />
          <p className="text-lg font-extrabold ml-2">Transaction</p>
        </Header>

        <main className="p-3">
          <div className="w-full h-full gap-3 flex flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Latte</h1>
                <div className="flex gap-3">
                  <p>2x</p>
                  <button className="text-rose-700 font-bold active:scale-95">
                    Delete
                  </button>
                </div>
              </div>
              <span>Rp.21.000</span>
            </div>

            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Latte</h1>
                <div className="flex gap-3">
                  <p>2x</p>
                  <button className="text-rose-700 font-bold active:scale-95">
                    Delete
                  </button>
                </div>
              </div>
              <span>Rp.21.000</span>
            </div>

            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Latte</h1>
                <div className="flex gap-3">
                  <p>2x</p>
                  <button className="text-rose-700 font-bold active:scale-95">
                    Delete
                  </button>
                </div>
              </div>
              <span>Rp.21.000</span>
            </div>

            <div className="w-full h-full flex flex-col gap-1 border-t pt-3">
              <div className=" flex justify-between">
                <span>Total Price :</span>
                <span className="font-bold">Rp.63.000</span>
              </div>
              <div className="flex justify-between">
                <span>Total Quantity :</span>
                <span className="font-bold">6</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="w-full h-min p-2 flex flex-col items-end justify-end gap-2 sticky bottom-0 bg-white border-t shadow px-3 pt-5 rounded-2xl">
        <div className="flex flex-col items-center w-full h-min gap-2">
          <Input
            type="number"
            placeholder="Enter amount"
            label="Enter the buyer's money"
            className="focus:outline-none w-full font-bold rounded-lg bg-slate-100"
          />
          <div className="w-full">
            <span className="text-sm text-slate-600 font-bold">Change</span>
            <div className="w-full h-11 bg-white items-center flex rounded-2xl">
              <p className="ml-3 font-bold">Rp.20.000</p>
            </div>
          </div>
        </div>

        <Button className="w-10/12 h-12 rounded-full flex justify-center items-center gap-1 mt-3">
          <p>Next</p>
          <IoMdArrowRoundForward className="text-xl" />
        </Button>
      </footer>
    </div>
  );
};

export default Transaction;
