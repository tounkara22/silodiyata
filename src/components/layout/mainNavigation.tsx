import Link from "next/link";
import Image from "next/image";
import styles from "./mainNavigation.module.css";
import i18n from "../../language/en";
import { IoMenuSharp, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const MainNavigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navHandler = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Silo Diyata logo"
          width="220"
          height="50"
        />
      </Link>

      <nav>
        <ul className={`${styles.navLinks} ${!isNavOpen && styles.hidden}`}>
          <li>
            <Link href={"/home"}>
              <a onClick={navHandler}>{i18n.layout.header.home}</a>
            </Link>
          </li>
          <li>
            <Link href="/bookings">
              <a onClick={navHandler}>{i18n.layout.header.bookings}</a>
            </Link>
          </li>
        </ul>
      </nav>

      {isNavOpen ? (
        <IoCloseOutline className={styles.icon} onClick={navHandler} />
      ) : (
        <IoMenuSharp className={styles.icon} onClick={navHandler} />
      )}
    </header>
  );
};

export default MainNavigation;
