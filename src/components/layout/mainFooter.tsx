import styles from "./mainFooter.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3>Silo Diyata Services</h3>
        <p>Nous contacter sur les réseaux sociaux</p>
        <ul className={styles.socials}>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.google.com" target="_blank">
              <FaGoogle />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
