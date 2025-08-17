import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      className="px-4 py-2 text-black bg-safety rounded-sm underline underline-offset-2  font-merriweather text-xl font-bold"
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
