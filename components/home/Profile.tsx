import AnimationHome from "./animation-home";
import Link from "next/link";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <>
      <section className={styles.container}>
        <p>
          目前在
          <a
            className={styles.tw}
            href="https://www.google.com/search?q=thoughtworks"
            target="_blank"
          >
            Thoughworks(AU)
          </a>
          担任前端工程师的职位
        </p>
        前端切图仔一枚，主要是
        <button className={[styles.btn, styles.react].join(" ")}>
          <span className={styles.react}>React</span>
        </button>
        和
        <button className={[styles.btn, styles.rounded].join(" ")}>
          <span className={styles.vue}>Vue</span>
        </button>
        <br />
        偶尔写点
        <button className={[styles.btn, styles.java].join(" ")}>
          <span className={styles.java}>Java</span>
        </button>
        和
        <button className={[styles.btn, styles.rs].join(" ")}>
          <span className={styles.rs}>Rust</span>
        </button>
      </section>
    </>
  );
};

export default Profile;
