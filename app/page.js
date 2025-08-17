import PaigeSVG from "@/app/components/home/PaigeSVG";
import Button from "@/app/components/home/Button";
import { ChevronRight, ChevronsDown } from "lucide-react";
import Image from "next/image";
import Features from "./components/home/Features";
import HowItWorksCard from "@/app/components/home/HowItWorksCard";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <div className="h-full text-lg ">
      {/* HERO BANNER */}
      <div className="bg-black text-white">
        <div className="flex items-center">
          <div className="w-48 h-32 mx-2 flex items-center">
            <PaigeSVG />
          </div>
          <h1 className="font-merriweather text-4xl pt-10 pb-6 mr-2">
            an a.i. specially designed for<br></br>
            <span className="text-red">civil engineers</span>
          </h1>
        </div>
        <div className="p-3">
          <p>
            Meet <span className="text-red font-bold">Paige</span>, the leading
            A.I. expert on the TXDot Specifications Manual.
          </p>
          <p className="pt-2">
            You can ask her about anything related to the TXDot manual, she is
            happy to help in any way she can!
          </p>
        </div>
        <div className="pb-10 px-3 pt-4 flex gap-x-3">
          <Button text="try our demo" link="/demo" />
          <Button text="who we are" link="/about" />
        </div>
      </div>

      {/* VIDEO */}
      <div className="pt-4 h-full w-[100vw] bg-[linear-gradient(to_bottom,_#222222_50%,_#fffcf900_50%)]">
        <div className="w-[90%] max-w-2xl mx-auto">
          <video
            src="/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* KEY FEATURES SECTION */}
      <Features />

      {/* HOW IT WORKS SECTION */}
      <h2 className="bg-white font-merriweather text-5xl flex justify-center p-2 mb-20 border-3 mx-10 border-red text-black">
        how it works
      </h2>
      <HowItWorksCard
        imageSrc={"/asking.jpeg"}
        title={"Ask Your Question"}
        description={
          "Type your query in plain language — no need to know section numbers or technical codes."
        }
      />
      <div className="flex justify-center my-20">
        <ChevronsDown className="w-16 h-16" strokeWidth={1} color="#d92d20" />
      </div>
      <HowItWorksCard
        imageSrc={"/search.jpeg"}
        title={"Paige Searches for the Answer"}
        description={
          "Paige accesses the internet or scans reference materials for the answer."
        }
      />
      <div className="flex justify-center my-20">
        <ChevronsDown className="w-16 h-16" strokeWidth={1} color="#d92d20" />
      </div>
      <HowItWorksCard
        imageSrc={"/answer.jpeg"}
        title={"Get Verified Answers"}
        description={
          "Receive a concise, clear answer with citations for trust and accuracy."
        }
      />
      <div className="flex justify-center my-20">
        <ChevronsDown className="w-16 h-16" strokeWidth={1} color="#d92d20" />
      </div>
      <HowItWorksCard
        imageSrc={"/workers.jpeg"}
        title={"Keep the Project Moving"}
        description={
          "Use the answer immediately in your work, confident you’re following the correct specification."
        }
      />

      {/* TRY IT SECTION */}
      <div className="flex flex-col w-full bg-white [clip-path:polygon(0_10%,100%_0,100%_100%,0_100%)]">
        <Image
          alt="Engineers shaking hands."
          src={"/handshake.jpeg"}
          width={200}
          height={200}
          className="w-full h-72 object-fit absolute"
        ></Image>
        <div className="mx-4 mt-26 mb-8 p-6 z-0">
          <h2 className="font-merriweather text-5xl flex justify-center p-2 mb-32 border-3 border-white text-white">
            want to try?
          </h2>
          <p className="pb-2">
            Wanting access to the full demo? Or just have some questions?
          </p>
          <p className="pb-2">Feel free to reach out to our team!</p>
          <div>
            <button className="flex items-center gap-x-2 mt-4 font-merriweather bg-safety rounded-sm underline underline-offset-2 text-xl font-bold pl-4 pr-2 py-2">
              contact us
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
