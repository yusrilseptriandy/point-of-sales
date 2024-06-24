interface LayoutMobileProps {
  children: React.ReactNode;
}

const LayoutMobile = ({ children }: LayoutMobileProps) => {
  return (
    <div
      className="flex
                 flex-col
                 w-full
                 h-screen
                 bg-white
"
    >
      {children}
    </div>
  );
};

export default LayoutMobile;
