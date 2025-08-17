import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-md font-exo">
      <Link href="/" className="py-6 flex items-center justify-center gap-2">
        <Image
          width={48}
          height={48}
          alt="Paige.ai logo"
          src="/logo.svg"
          className="block w-10 bg-white rounded-full border-black border"
        />
        <span className="text-xl">P.AI.GE</span>
      </Link>
      <div className="flex justify-center gap-x-8 mx-10 pb-6">
        <div className="w-1/2 flex flex-col gap-y-2 text-right pr-8">
          <Link
            href={"/"}
            className="underline decoration-white underline-offset-4"
          >
            Home
          </Link>
          <Link
            href={"/demo"}
            className="underline decoration-white underline-offset-4"
          >
            Demo
          </Link>
          <Link
            href={"/about"}
            className="underline decoration-white underline-offset-4"
          >
            About
          </Link>
        </div>
        <p className="w-1/2 text-left">
          © {new Date().getFullYear()} P.AI.GE. <br></br>All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
