import Link from "next/link";
import GradientBtn from "./GradientBtn";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-transparent">
      <Link href="/">
        <Image
          src="/Assets/Logo/kiitfest-logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-20 h-20"
        />
      </Link>
      <ul className="hidden lg:flex font-lato text-white justify-center items-center gap-6 ml-auto p-4">
        <li>
          <Link
            className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer hover:brightness-125"
            href="/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer hover:brightness-125"
            href="/Events"
          >
            Event
          </Link>
        </li>
        <li>
          <Link
            className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer hover:brightness-125"
            href="/Members"
          >
            Members
          </Link>
        </li>
        <li>
          <Link
            className="p-4 uppercase duration-200 hover:text-thPink cursor-pointer"
            href="/search"
          >
            <Image
              src="/Assets/Icons/search-icon.png"
              alt="Search Icon"
              width={100}
              height={100}
              className="w-6 h-6 filter hover:brightness-125"
            />
          </Link>
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
