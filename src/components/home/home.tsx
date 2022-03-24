import styles from "./home.module.css";
import i18n from "../../language/en";
import BookingStart from "../booking/bookingStart";
const HomeScreen = (props: any) => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div>
            <h1>{i18n.home.hero.title}</h1>
            <h3>{i18n.home.hero.subtitle}</h3>
          </div>
        </div>
        <div className={styles.heroRight}>
          <BookingStart />
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
