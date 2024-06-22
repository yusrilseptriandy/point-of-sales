import { GoHome, GoHomeFill } from 'react-icons/go';
import { PiNotepad, PiNotepadFill } from 'react-icons/pi';
import {
  RiBox1Fill,
  RiBox1Line,
  RiUser3Fill,
  RiUser3Line,
} from 'react-icons/ri';

import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();

  const navItems = [
    {
      title: 'Home',
      link: '/',
      icon: <GoHome style={{ stroke: 'GrayText', strokeWidth: '0.5' }} />,
      iconActive: <GoHomeFill />,
    },
    {
      title: 'Products',
      link: '/products',
      icon: <RiBox1Line />,
      iconActive: <RiBox1Fill />,
    },
    {
      title: 'history',
      link: '/history',
      icon: <PiNotepad style={{ stroke: 'GrayText', strokeWidth: '5' }} />,
      iconActive: <PiNotepadFill />,
    },
    {
      title: 'Profile',
      link: '/profile',
      icon: <RiUser3Line />,
      iconActive: <RiUser3Fill />,
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
                    p-1
                    border-t-1 
                    bg-white
                    "
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className={`w-full h-full flex flex-col items-center justify-center text-2xl gap-1  ${
            location.pathname === item.link ? 'text-biru' : 'text-slate-600'
          }`}
        >
          {location.pathname === item.link ? item.iconActive : item.icon}
          <p className="text-xs font-bold ">{item.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
