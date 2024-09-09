import { Ballet } from "next/font/google";
import Link from "next/link";
interface Props {
  href: string;
  title: string;
  blank?: boolean;
}

const Btn = ({ href, title, blank }: Props) => {
  return (
    <>
      {blank ? (
        <Link
          href={href}
          className="bg-blue-950 text-white p-6 px-10  rounded-3xl text-center hover:text-white block max-sm:my-5"
          target="_blank"
        >
          {title}
        </Link>
      ) : (
        <Link
          href={href}
          className="bg-blue-950 text-white p-6 px-10  rounded-3xl text-center hover:text-white block max-sm:my-5"
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default Btn;
