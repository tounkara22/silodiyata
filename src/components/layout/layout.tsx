import { Fragment } from "react";
import styles from "./layout.module.css";
import Footer from "./mainFooter";
import MainNavigation from "./mainNavigation";

const Layout = (props: any) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
