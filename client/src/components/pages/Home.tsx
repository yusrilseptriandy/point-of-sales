import { IoSearch } from 'react-icons/io5';
import Input from '../atoms/Input/Input';
import LayoutMobile from '../layouts/LayoutMobile';
import Header from '../organisms/Header';
import Navbar from '../organisms/Navbar';
import CardStok from '../organisms/CardStok';
import ProductList from '../organisms/ProductList';

const Home = () => {
  return (
    <>
      <LayoutMobile>
        <div className="w-full h-screen flex flex-col">
          <Header>
            <div className="w-full h-11 rounded-xl flex justify-center items-center pl-2 border-[1.5px]">
              <div>
                <IoSearch className="text-xl text-slate-400" />
              </div>
              <Input
                type="search"
                placeholder="Search your product..."
                className="w-[90%] focus:outline-none
                           bg-transparent"
              />
            </div>
          </Header>
          <div className="w-full h-min flex p-3 gap-2  justify-center ">
            <CardStok amount={0} describe="items" />
            <CardStok amount={1} describe="variants" />
          </div>

          <ProductList />
        </div>
        <Navbar />
      </LayoutMobile>
    </>
  );
};

export default Home;
