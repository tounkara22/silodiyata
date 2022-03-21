import { Fragment } from "react";
import styles from "./home.module.css";
import i18n from "../../language/en";
import { FaChevronDown } from "react-icons/fa";
const HomeScreen = (props: any) => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{i18n.home.hero.title}</h1>
          <h3>{i18n.home.hero.subtitle}</h3>
          <p>{i18n.home.hero.description}</p>
          <div className={styles.btnGroup}>
            <button className={styles.btn}>{i18n.home.hero.bookButton}</button>
            <button className={styles.btn}>
              {i18n.home.hero.contactButton}
            </button>
          </div>
        </div>
      </section>
      <section className={styles.details}>
        <div className={styles.detailsItem}>
          <div className={styles.detailsItemLeft}>
            <img
              className={styles.itemImage}
              src="https://media.istockphoto.com/vectors/linear-sketch-plane-taking-off-vector-id488118864?k=20&m=488118864&s=612x612&w=0&h=Y6DJs2nJW73UtftUOICVqfPmJDAvQItUQXOWO2dRdTo="
              alt="Landing"
            />
          </div>
          <div className={styles.detailsItemRight}>
            <div className={styles.itemDescription}>
              <h3>{i18n.home.details.detail1.title}</h3>
              <h4>{i18n.home.details.detail1.subtitle}</h4>
              <p>{i18n.home.details.detail1.details}</p>
            </div>
          </div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.detailsItemLeft}>
            <div className={styles.itemDescription}>
              <h3>{i18n.home.details.detail2.title}</h3>
              <h4>{i18n.home.details.detail2.subtitle}</h4>
              <p>{i18n.home.details.detail2.details}</p>
            </div>
          </div>
          <div className={styles.detailsItemRight}>
            <img
              className={styles.itemImage}
              src="https://thumbs.dreamstime.com/b/one-line-drawing-man-sitting-reading-one-line-drawing-man-sitting-reading-vector-linear-illustration-131728993.jpg"
              alt="Comfortable ride"
            />
          </div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.detailsItemLeft}>
            <img
              className={styles.itemImage}
              src="https://media.istockphoto.com/vectors/support-center-hand-hold-robot-agent-mobile-application-artificial-vector-id985640076?k=20&m=985640076&s=612x612&w=0&h=HfeHTp8ZJfmYPXUJi4iuwLF6w32ejoS1_rbOeJUgaOo="
              alt="Landing"
            />
          </div>
          <div className={styles.detailsItemRight}>
            <div className={styles.itemDescription}>
              <h3>{i18n.home.details.detail3.title}</h3>
              <h4>{i18n.home.details.detail3.subtitle}</h4>
              <p>{i18n.home.details.detail3.details}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
