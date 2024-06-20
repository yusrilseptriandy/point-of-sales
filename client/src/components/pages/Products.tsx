import LayoutMobile from '../layouts/LayoutMobile';
import Navbar from '../organisms/Navbar';

const Products = () => {
  return (
    <>
      <LayoutMobile>
        <div className="w-full h-screen bg-slate-100"> Products</div>
        <Navbar />
      </LayoutMobile>
    </>
  );
};

export default Products;
