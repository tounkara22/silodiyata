import Link from "next/link";
import Image from "next/image";
import styles from "./mainNavigation.module.css";
import i18n from "../../language/fr";

const MainNavigation = (props: any) => {
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
        <ul className={styles.navLinks}>
          <li>
            <Link href="/home">{i18n.layout.header.home}</Link>
          </li>
          <li>
            <Link href="/bookings">{i18n.layout.header.bookings}</Link>
          </li>
          <li>
            <Link href="/contacts">{i18n.layout.header.contacts}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
