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
                 bg-zinc-100
                 md:hidden
                 lg:hidden
                 xl:hidden
                 2xl:hidden"
    >
      <section className="w-full h-full">home</section>
      {children}
    </div>
  );
};

export default LayoutMobile;
