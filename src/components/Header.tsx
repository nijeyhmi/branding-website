import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 w-full bg-white ${
        isScrolled ? "border-b border-gray-200 shadow-xm" : ""
      }`}
    >
      <section className="flex items-center h-[60px] justify-between px-12">
        <h1 className="font-allura text-primary !text-xl">AsYun</h1>
        <ul className="flex flex-row text-primary text-lg font-semibold">
          <li>About Me</li>
          <li className="pl-7">Videos</li>
          <li className="pl-7">Shop</li>
          <li className="pl-7">Guide</li>
          <li className="pl-7">Contact</li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
