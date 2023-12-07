import styles from "../styles/error.module.css";

export default function Error404() {
  return (
    <html className={styles.html}>
      <div className={styles.errorBox}>
        <img
          className={styles.errLogo}
          src="/devt-mag-high-resolution-logo-transparent.png"
          alt="logo"
          draggable="false"
        />
        <p className={styles.errorPageTextLarger}>
          <i class="fa-solid fa-face-sad-tear"></i> The page cannot respond
          right now!
        </p>
        <p className={styles.errorPageText}>
          -- Try accessing this page later or check spelling in the URL!
        </p>
      </div>
    </html>
  );
}
