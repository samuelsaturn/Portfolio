// Next Link
import Link from "next/link";

// Icons
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.linkedin.com/in/samuel-mathias-7480a7212/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://github.com/samuelsaturn"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://wa.me/+5511963507101"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>
      <Link href={"https://www.instagram.com/sarateni_/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
