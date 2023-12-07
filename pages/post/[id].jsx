import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import HeaderStyles from "../../styles/header.module.css";
import styles from "../../styles/productPage.module.css";
import FooterStyles from "../../styles/footer.module.css";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const postId = params.id;

  // Initialize Firestore
  const db = getFirestore();

  // Fetch the post data from Firestore
  const postDocRef = doc(db, "posts", postId);
  const postDoc = await getDoc(postDocRef);
  const postData = postDoc.data();

  // Check if a post with the given ID exists
  if (!postData) {
    return {
      notFound: true, // Return a 404 error if the post doesn't exist
    };
  }

  // Convert the date string to a JavaScript Date object
  const date = postData.date.toDate().toISOString();

  return {
    props: {
      post: {
        ...postData,
        date,
      },
    },
  };
}

export default function ProductPage({ post }) {
  const router = useRouter();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [secondPaymentStatus, setSecondPaymentStatus] = useState(null);

  useEffect(() => {
    // This code runs on initial page load
    const id = window.location.pathname.split("/").pop();
    const price = post.price;
    router.push(`../post/${id}?price=${price}`);
  }, []);

  const handleBuyClick = async () => {
    try {
      const id = window.location.pathname.split("/").pop();
      const price = post.price;
      // Redirect to the dynamic payment page with postId and price as query parameters
      router.push(`/payment/${id}?price=${price}`);
    } catch (error) {
      toast.error("Error while creating a payment intent:", error);
    }
  };

  const handleSecondBuyClick = async () => {
    try {
      const { postId, price } = router.query; // Get postId and price from the query
      console.log(price);
      const response = await fetch("/api/create-charge", {
        method: "POST",
        body: JSON.stringify({ price }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        window.location.href = data.charge.data.hosted_url;
        setSecondPaymentStatus(data.message);
      } else {
        const errorData = await response.json();
        setSecondPaymentStatus(errorData.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSecondPaymentStatus("An error occurred while creating the charge.");
    }
  };
  return (
    <div className={styles.container}>
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
            <span className={HeaderStyles.pageDescriberLow}>{post.title}</span>
            <div className={HeaderStyles.headerNavLow}>
              <a className={HeaderStyles.headerLink} href="../">
                Home
              </a>
              <a className={HeaderStyles.headerLink} href="../buy">
                Buy
              </a>
              <a className={HeaderStyles.headerLink} href="../sell">
                Sell
              </a>
              <a className={HeaderStyles.headerLink} href="../account">
                Profile
              </a>
            </div>
          </div>
        </div>

        <span className={HeaderStyles.pageDescriberHigh}>{post.title}</span>

        <div className={HeaderStyles.headerNavHigh}>
          <a className={HeaderStyles.headerLink} href="../">
            Home
          </a>
          <a className={HeaderStyles.headerLink} href="../buy">
            Buy
          </a>
          <a className={HeaderStyles.headerLink} href="../sell">
            Sell
          </a>
          <a className={HeaderStyles.headerLink} href="../account">
            Profile
          </a>
        </div>
      </header>
      <div className={styles.main}>
        <Link className={styles.backBTN} href="../buy">
          <i className="fa-solid fa-angles-left" /> Back
        </Link>

        <div className={styles.productInfo}>
          <div className={styles.imageSection}>
            <img
              className={styles.image}
              src={post.imageUrl}
              alt={post.title}
            />
            <p className={styles.date}>
              Post made on: {new Date(post.date).toLocaleString()}
            </p>
          </div>
          <div className={styles.productDesc}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.price}>Price: ${post.price}</p>
            <p className={styles.content}>
              Description: <span>{post.content}</span>
            </p>
            <button
              className={styles.BuyButton}
              onClick={() => {
                handleBuyClick();
              }}
            >
              Buy with stripe
            </button>
            <button
              className={styles.BuyButton}
              onClick={() => {
                handleSecondBuyClick();
              }}
            >
              Buy with crypto
            </button>
          </div>
        </div>
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
                <a className={FooterStyles.link} href="../">
                  Home
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="../sell">
                  Sell
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="../buy">
                  Buy
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="../account">
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
}
