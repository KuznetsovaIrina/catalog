import Image from "next/image";
import LogoImage from "../../images/logo.svg";
import classes from "./header.module.scss";
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
    <a className={classes.logo}>
      <Image src={LogoImage} alt="Logo" />
    </a>
    </Link>
  );
};

export default Logo;
