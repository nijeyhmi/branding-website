const Header = () => {
  return (
    <div className="fixed left-0 top-0 w-full bg-white">
      <div className="flex items-center w-full h-[80px] justify-between px-32">
        <h1 className="font-allura text-primary">AsYun</h1>
        <ul className="flex flex-row text-primary text-2xl font-semibold">
          <li>About Me</li>
          <li className="pl-7">Videos</li>
          <li className="pl-7">Shop</li>
          <li className="pl-7">Guide</li>
          <li className="pl-7">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
