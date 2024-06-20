import { AiFillHome } from 'react-icons/ai';
import { PiNotepadFill } from 'react-icons/pi';
import { RiBox1Fill, RiUser3Fill } from 'react-icons/ri';

import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();

  const navItems = [
    {
      title: 'Home',
      link: '/',
      icon: <AiFillHome />,
    },
    {
      title: 'Products',
      link: '/products',
      icon: <RiBox1Fill />,
    },
    {
      title: 'history',
      link: '/history',
      icon: <PiNotepadFill />,
    },
    {
      title: 'Profile',
      link: '/profile',
      icon: <RiUser3Fill />,
    },
  ];

  return (
    <nav
      className="w-full 
                    h-16 
                    fixed 
                    bottom-0 
                    flex 
                    border-t
                    bg-white
                    p-1
                    border-t-1
                    "
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className={`w-full h-full flex flex-col items-center justify-center text-2xl gap-1  ${
            location.pathname === item.link
              ? 'text-biru scale-105'
              : 'text-slate-600'
          }`}
        >
          {item.icon}
          <p className="text-xs font-bold ">{item.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
