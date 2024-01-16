import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>
          {" "}
          <a href="https://www.instagram.com/murilloacouto/" target="_blank">
            <FaInstagram size={35} />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/MurilloCouto" target="_blank">
            <FaGithub size={35} />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/in/murillo-alves-couto-1b072828a/" target="_blank">
            <FaLinkedin size={35} />
          </a>
        </li>
      </ul>

      <p>
        murilloacouto@outlook.com
        <br />
        <br />
        Murillo Couto © 2023
      </p>
    </div>
  );
}
