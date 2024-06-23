import { TiUserOutline } from 'react-icons/ti';
import Button from '../atoms/Button/Button';
import LayoutMobile from '../layouts/LayoutMobile';
import Header from '../organisms/Header';
import Navbar from '../organisms/Navbar';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuPlusCircle } from 'react-icons/lu';
import { BiLogOut } from 'react-icons/bi';

const Profile = () => {
  return (
    <>
      <LayoutMobile>
        <Header border="bottom">
          <h1 className="text-2xl font-extrabold">Profile</h1>
        </Header>
        <div className="w-full h-screen bg-white p-3">
          <div className="h-min flex flex-col items-center justify-center gap-3">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-28 h-28 rounded-full"
            />
            <h1 className="text-2xl font-bold tracking-tighter">your name</h1>
          </div>

          <div className="flex gap-9 justify-center mt-3">
            <div className="flex flex-col items-center">
              <p className="font-bold">0</p>
              <p className="text-sm">Transaction</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold">0</p>
              <p className="text-sm">Product out of stock</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold">0</p>
              <p className="text-sm">Products</p>
            </div>
          </div>

          <Button className="w-full mt-3 bg-slate-100 rounded-xl text-black font-bold active:bg-slate-200 active:scale-95">
            Edit Profile
          </Button>

          <div className="mt-6">
            <Link
              to="/account"
              className="w-full h-16 border-b flex items-center justify-between"
            >
              <div className="flex gap-3">
                <TiUserOutline className="text-2xl text-abu" />
                <p className="font-bold">Account Setting</p>
              </div>

              <FaChevronRight className="text-abu" />
            </Link>

            <Link
              to="/account"
              className="w-full h-16 border-b flex items-center justify-between"
            >
              <div className="flex gap-3 justify-between">
                <LuPlusCircle className="text-2xl text-abu" />
                <p className="font-bold">Add Product</p>
              </div>

              <FaChevronRight className="text-abu" />
            </Link>

            <Button className="w-full h-12 rounded-full bg-rose-600 mt-6 active:bg-rose-700 active:scale-95">
              <div className="w-full h-full flex items-center gap-3 justify-center">
                <BiLogOut className="text-2xl" />
                Logout
              </div>
            </Button>
          </div>
        </div>
        <Navbar />
      </LayoutMobile>
    </>
  );
};

export default Profile;
