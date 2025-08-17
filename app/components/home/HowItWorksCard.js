import Image from "next/image";

const HowItWorksCard = ({ imageSrc, title, description }) => {
  return (
    <div className="relative mx-10 mb-30">
      {/* Black offset background */}
      <div className="absolute top-2 left-2 w-full h-full bg-black/90 rounded-md"></div>

      {/* Main white card */}
      <div className="relative bg-white shadow-lg rounded-md">
        <Image
          alt="AI answers the question."
          src={imageSrc}
          width={200}
          height={200}
          className="w-full object-cover rounded-t-md"
        />
        <p className="font-merriweather text-3xl p-4 underline underline-offset-4 decoration-2 decoration-red">
          {title}
        </p>
        <p className="px-4 pb-4">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
