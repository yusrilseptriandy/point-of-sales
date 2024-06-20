import LayoutMobile from '../layouts/LayoutMobile';
import Navbar from '../organisms/Navbar';

const History = () => {
  return (
    <>
      <LayoutMobile>
        <div className="w-full h-screen bg-slate-100"> History</div>
        <Navbar />
      </LayoutMobile>
    </>
  );
};

export default History;
