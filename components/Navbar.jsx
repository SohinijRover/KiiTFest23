import Link from "next/link";
import GradientBtn from "./GradientBtn";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-transparent">
      <Link href="/">
        <a>
          <img
            src="/assets/logo/kiitfest-logo.png"
            alt="Logo"
            className="w-20 h-20"
          />
        </a>
      </Link>
      <ul className="hidden lg:flex font-lato text-white justify-center items-center gap-6 ml-auto p-4">
        <li>
          <Link href="/">
            <a className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer hover:brightness-125">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Events">
            <a className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer hover:brightness-125">
              Event
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Members">
            <a className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer hover:brightness-125">
              Members
            </a>
          </Link>
        </li>
        <li>
          <a className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer">
            <img
              src="/assets/icons/search-icon.png"
              alt="Search Icon"
              className="w-6 h-6 filter hover:brightness-125"
            />
          </a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-center items-center gap-1">
        <GradientBtn className="ml-2 capitalize" title="Register now" />
      </div>
      <div className="lg:hidden">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
