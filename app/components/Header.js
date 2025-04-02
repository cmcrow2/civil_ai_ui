import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white h-16 tracking-widest border-b-2 border-black shadow-lg">
      <div className="flex h-full items-center px-4">
        <Link href="/" className="flex items-center gap-x-2 text-xl">
          <Image width={50} height={50} alt="Paige.ai logo" src="logo.svg" />
          p.ai.ge
        </Link>
        <div className="pl-8 flex gap-x-4">
          <Link
            href="/demo"
            className="border-1 border-white hover:border-1 hover:border-royal px-2 rounded-2xl"
          >
            demo
          </Link>
          <Link
            href="/about"
            className="border-1 border-white hover:border-1 hover:border-royal px-2 rounded-2xl"
          >
            about
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
