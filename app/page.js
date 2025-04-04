import PaigeSVG from "@/app/components/PaigeSVG";
import ButtonAnimation from "@/app/components/animations/button";

export default function Home() {
  return (
    <div className="bg-black text-white h-100 flex flex-col items-left justify-center px-20">
      <div className="flex">
        <PaigeSVG />
        <div className="font-montserrat text-5xl tracking-wide pb-6 pl-2">
          an a.i. specially designed<br></br>for{" "}
          <span className="text-red">civil engineers</span>
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
        <ButtonAnimation text="try our demo" link="/demo" />
        <ButtonAnimation text="who we are" link="/about" />
      </div>
    </div>
  );
}
