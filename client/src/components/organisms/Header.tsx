interface HeaderProps {
  children: React.ReactNode;
  border?: 'bottom' | 'top' | 'none';
}

const Header = ({ children, border = 'none' }: HeaderProps) => {
  const borderStyle =
    border === 'bottom' ? 'border-b' : border === 'top' ? 'border-t' : '';
  return (
    <header
      className={`w-full h-16 bg-white p-3 flex items-center justify-center ${borderStyle}`}
    >
      {children}
    </header>
  );
};

export default Header;
