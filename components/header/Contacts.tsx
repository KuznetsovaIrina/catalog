import Image from "next/image";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Viber from "../../images/viber.svg";
import Whatsapp from "../../images/whatsapp.svg";
import classes from "./header.module.scss";

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <a href="tel:+37322838787" className={classes.phone}>
        +(373) 22 83-87-87
      </a>
      <ul className={classes.socials}>
        <li>
          <a href="#" target="_blank">
            <Image src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image src={Viber} alt="Viber" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image src={Whatsapp} alt="Whatsapp" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
