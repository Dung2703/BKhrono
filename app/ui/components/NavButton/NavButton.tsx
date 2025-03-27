import Image from "next/image";
import Link from "next/link";

interface NavButtonProps {
  src: string;
  alt: string;
  href: string;
  target?: string;
}

function NavButton(props : NavButtonProps) {
  return (
    <Link href={props.href} passHref target={props.target}>
      <Image src={props.src} width={100} height={100} alt={props.alt} priority/>
    </Link>
  );
}

export default NavButton;