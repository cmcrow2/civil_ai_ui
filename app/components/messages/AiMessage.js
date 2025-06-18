import Image from "next/image";
import ReactMarkdown from "react-markdown";

const AiMessage = ({ text, isFirst, handleSubmit }) => {
  const sampleQuestions = [
    "When utilizing bid item 429 for repair of concrete structures, what class of concrete should be provided for substructures? What class of concrete should be provided for decks?",
    "What item should be referenced (followed) for the repair of concrete beams, including surface repairs of spalls and delamination? Are additional items required when the engineer wishes to seal concrete cracks with epoxy? What compressive strength does the repaired concrete need to support in capacity?",
    "Generally speaking, what grade of reinforcing steel for concrete structures should be provided if plan sheets show no specific grade? If the engineer wanted to utilize a bar size number of 7, what would the nominal diameter (in inches), area (in square inches) and weight per foot (in pounds) be for this bar size?",
  ];

  const handleClick = (e, question) => {
    e.preventDefault();
    handleSubmit(e, question);
  };

  return (
    <div className="mr-auto p-1 flex flex-col items-start max-w-[80%]">
      <div className="flex items-start">
        <Image
          width={40}
          height={40}
          alt="Paige.ai logo"
          src="logo.svg"
          className="mt-2"
        />
        <div className="inline-block px-2 py-2 prose text-sm my-auto">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
      <div className="pb-2">
        {isFirst &&
          sampleQuestions.map((question, index) => (
            <button
              type="button"
              key={index}
              className="w-full p-2 m-1 ml-12 border-black border-1 rounded-sm cursor-pointer text-left hover:bg-black-100/10"
              onClick={(e) => handleClick(e, question)}
            >
              {question}
            </button>
          ))}
      </div>
    </div>
  );
};

export default AiMessage;
