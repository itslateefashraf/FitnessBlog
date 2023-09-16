import styles from "./Banner.module.css";

const banner = () => {
  return (
    <>
      <section>
        <div className={styles["bg"]}>
          <p className={styles["Main-text"]}>
            {" "}
            Consistency is Key to getting long term result.Lern how to get and
            stay Motivated.{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default banner;
