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
                 md:hidden
                 lg:hidden
                 xl:hidden
                 2xl:hidden
"
    >
      {children}
    </div>
  );
};

export default LayoutMobile;
