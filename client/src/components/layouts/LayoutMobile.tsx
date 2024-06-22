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
                 bg-slate-100
"
    >
      {children}
    </div>
  );
};

export default LayoutMobile;
