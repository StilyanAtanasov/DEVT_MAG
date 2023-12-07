import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../lib/firebase";
import PostList from "../components/buyList";
import HeaderStyles from "../styles/header.module.css";
import styles from "../styles/buy.module.css";
import FooterStyles from "../styles/footer.module.css";
import { app } from "../lib/firebase";
const db = getFirestore(app);

const Home = ({ posts }) => {
  const initialPosts = posts || []; // Provide an initial empty array if `posts` is undefined
  const [sortedPosts, setSortedPosts] = useState(initialPosts);
  const [sortBy, setSortBy] = useState("titleAsc"); // Default sorting option

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Define your sorting and ordering options here
  const sortingOptions = {
    titleAsc: orderBy("title", "asc"),
    titleDesc: orderBy("title", "desc"),
    priceAsc: orderBy("price", "asc"),
    priceDesc: orderBy("price", "desc"),
    dateAsc: orderBy("date", "asc"),
    dateDesc: orderBy("date", "desc"),
  };

  // Create a query with the selected sorting option
  const postQuery = query(collection(db, "posts"), sortingOptions[sortBy]);

  useEffect(() => {
    // Fetch posts based on the selected sorting option
    const fetchPosts = async () => {
      try {
        const postSnapshot = await getDocs(postQuery);
        const updatedPosts = postSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSortedPosts(updatedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [sortBy]);

  return (
    <div className={HeaderStyles.html}>
      {/* Header */}
      <header className={HeaderStyles.header}>
        <a href="#">
          <img
            className={HeaderStyles.headerLogo}
            src="../devt-mag-high-resolution-logo-transparent.png"
            alt="Logo"
          />
        </a>

        <div className={HeaderStyles.barsSection}>
          <span className={HeaderStyles.bars}>
            <i className="fa-solid fa-bars" />
          </span>
          <div className={HeaderStyles.dropMenu}>
            <span className={HeaderStyles.pageDescriberLow}>
              Available Products
            </span>
            <div className={HeaderStyles.headerNavLow}>
              <a className={HeaderStyles.headerLink} href="./">
                Home
              </a>
              <a
                className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
                href="#"
              >
                Buy
              </a>
              <a className={HeaderStyles.headerLink} href="./sell">
                Sell
              </a>
              <a className={HeaderStyles.headerLink} href="./account">
                Profile
              </a>
            </div>
          </div>
        </div>

        <span className={HeaderStyles.pageDescriberHigh}>
          Available Products
        </span>

        <div className={HeaderStyles.headerNavHigh}>
          <a className={HeaderStyles.headerLink} href="./">
            Home
          </a>
          <a
            className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
            href="#"
          >
            Buy
          </a>
          <a className={HeaderStyles.headerLink} href="./sell">
            Sell
          </a>
          <a className={HeaderStyles.headerLink} href="./account">
            Profile
          </a>
        </div>
      </header>
      <div className={styles.main}>
        <h1 className={styles.title}>All Posts</h1>
        <div className={styles.filter}>
          <label className={styles.label}>Sort By:</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="titleAsc">Title (A-Z)</option>
            <option value="titleDesc">Title (Z-A)</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
            <option value="dateAsc">Date (Old to New)</option>
            <option value="dateDesc">Date (New to Old)</option>
          </select>
        </div>
      </div>

      <div className={styles.allPosts}>
        <PostList posts={sortedPosts} />
      </div>

      <footer className={FooterStyles.footer}>
        <div
          className="container grid grid--footer"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 15fr)" }}
        >
          <div className="logo-col col" style={{ marginRight: "20px" }}>
            <a href="#">
              <img
                className={FooterStyles.img}
                alt=" logo"
                src="/devt-mag-high-resolution-logo-transparent.png"
              />
            </a>
          </div>
          <div className={FooterStyles.contact} style={{ flex: 2 }}>
            <p className="footer-heading">Contact us on:</p>
            <address className="contacts">
              <p>
                <a className="footer-link" href>
                  softunifest@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="nav-col col" style={{ flex: 1 }}>
            <p className="footer-heading">Pages</p>
            <ul className={HeaderStyles.ul} type="none">
              <li>
                <a className={FooterStyles.link} href="./">
                  Home
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="./sell">
                  Sell
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="#">
                  Buy
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="./account">
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-col col" style={{ flex: 1 }}>
            <p className="footer-heading">Follow us</p>
            <ul className={HeaderStyles.ul} type="none">
              <li>
                <a
                  className={FooterStyles.link}
                  href="https://www.facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="https://www.twitter.com">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className={FooterStyles.link}
                  href="https://www.instagram.com"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
