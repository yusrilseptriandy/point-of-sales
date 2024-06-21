import LayoutMobile from '../layouts/LayoutMobile';
import Navbar from '../organisms/Navbar';
import ProductList from '../organisms/ProductList';
import TransactionBtn from '../organisms/TransactionBtn';

const Home = () => {
  return (
    <>
      <LayoutMobile>
        <div className="w-full h-screen flex flex-col">
          <ProductList />
        </div>
        <TransactionBtn />
        <Navbar />
      </LayoutMobile>
    </>
  );
};

export default Home;
