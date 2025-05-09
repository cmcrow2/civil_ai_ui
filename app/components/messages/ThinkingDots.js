import Image from "next/image";

const ThinkingDots = ({ text }) => {
  return (
    <div className="mr-auto p-1 flex items-start">
      <Image
        width={40}
        height={40}
        alt="Paige.ai logo"
        src="logo.svg"
        className="pt-2"
      />
      <div className="inline-block px-2 py-2 max-w-[80%] my-auto">
        <div className="flex space-x-1">
          <span className="w-1 h-1 bg-black rounded-full animate-bounce-dot"></span>
          <span
            className="w-1 h-1 bg-black rounded-full animate-bounce-dot"
            style={{ animationDelay: "200ms" }}
          ></span>
          <span
            className="w-1 h-1 bg-black rounded-full animate-bounce-dot"
            style={{ animationDelay: "400ms" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default ThinkingDots;
