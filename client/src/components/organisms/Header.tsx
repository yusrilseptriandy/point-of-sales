interface HeaderProps {
  children: React.ReactNode;
  border?: 'bottom' | 'top' | 'none';
}

const Header = ({ children, border = 'none' }: HeaderProps) => {
  const borderStyle =
    border === 'bottom' ? 'border-b' : border === 'top' ? 'border-t' : '';
  return (
    <header
      className={`w-full h-16 p-3 flex items-center bg-white ${borderStyle}`}
    >
      {children}
    </header>
  );
};

export default Header;
