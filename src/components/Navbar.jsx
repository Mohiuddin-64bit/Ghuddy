const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
          <button>Login</button>
          <button className="">Registration</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
