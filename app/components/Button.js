import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link className="px-4 py-2 border-1 hover:border-red" href={link}>
      {text}
    </Link>
  );
};

export default Button;
