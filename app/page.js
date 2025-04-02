import PaigeSVG from "@/app/components/PaigeSVG";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-seashell h-100 flex flex-col items-left justify-center px-20">
      <div className="flex">
        <PaigeSVG />
        <div className="font-montserrat text-5xl tracking-wide pb-6 pl-2">
          an a.i. specially designed<br></br>for{" "}
          <span className="text-columbia-600">civil engineers</span>
        </div>
      </div>
      <div className="w-150">
        <div>
          Meet Paige, the leading A.I. expert on the TXDot Specifications
          Manual.
        </div>
        <div>
          You can ask her about anything related to the TXDot manual, she is
          happy to help in any way she can!
        </div>
      </div>
      <div className="flex flex-row gap-x-2">
        <Link
          href="/demo"
          className="bg-columbia-600 p-2 mt-4 w-36 flex items-center justify-center text-seashell tracking-widest rounded-md hover:shadow-lg hover:bg-royal hover:text-seashell hover:border-royal transition"
        >
          try our demo
        </Link>
        <Link
          href="/about"
          className="p-2 border-1 border-columbia-600 text-columbia-600 mt-4 w-36 flex items-center justify-center tracking-widest rounded-md hover:shadow-lg hover:bg-seashell hover:text-royal hover:border-1 hover:border-royal transition"
        >
          who we are
        </Link>
      </div>
    </div>
  );
}
