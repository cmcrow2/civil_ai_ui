import Image from "next/image";
import ReactMarkdown from "react-markdown";

const AiMessage = ({ text }) => {
  return (
    <div className="mr-auto p-1 flex items-start">
      <Image
        width={40}
        height={40}
        alt="Paige.ai logo"
        src="logo.svg"
        className="pt-2"
      />
      <div className="inline-block px-2 py-2 max-w-[80%] prose">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AiMessage;
