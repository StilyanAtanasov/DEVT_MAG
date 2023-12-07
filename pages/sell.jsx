import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import HeaderStyles from "../styles/header.module.css";
import styles from "../styles/sell.module.css";
import FooterStyles from "../styles/footer.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { app } from "../lib/firebase";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null); // To store user information

  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  useEffect(() => {
    // Listen for changes in user authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Please fill in all fields.");
      return;
    }

    if (price < 0) {
      alert("Price cannot be lower than zero!");
      return;
    }

    if (!user) {
      alert("Please sign in to create a post.");
      return;
    }

    try {
      // Check if a post with the same title and content already exists
      const postRef = collection(db, "posts");
      const queryCondition = query(
        postRef,
        where("title", "==", title),
        where("content", "==", content)
      );
      const querySnapshot = await getDocs(queryCondition);

      if (!querySnapshot.empty) {
        alert("A post with the same title and content already exists.");
        return;
      }

      // 1. Upload the image to the storage bucket
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);

      // 2. Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // 3. Get the current date and time
      const currentDate = new Date();

      // 4. Save the post in the Firestore database with the date field and username
      const post = {
        title: title,
        content: content,
        price: price,
        imageUrl: imageUrl,
        date: currentDate,
        username: user.displayName, // Include the username
      };

      await addDoc(postRef, post);

      toast.success("Post created successfully");
      // Reset form fields
      setTitle("");
      setContent("");
      setPrice(0);
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className={styles.all}>
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
            <span className={HeaderStyles.pageDescriberLow}>Your Deals</span>
            <div className={HeaderStyles.headerNavLow}>
              <a className={HeaderStyles.headerLink} href="./">
                Home
              </a>
              <a className={HeaderStyles.headerLink} href="./buy">
                Buy
              </a>
              <a
                className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
                href="#"
              >
                Sell
              </a>
              <a className={HeaderStyles.headerLink} href="./account">
                Profile
              </a>
            </div>
          </div>
        </div>

        <span className={HeaderStyles.pageDescriberHigh}>Your Deals</span>

        <div className={HeaderStyles.headerNavHigh}>
          <a className={HeaderStyles.headerLink} href="./">
            Home
          </a>
          <a className={HeaderStyles.headerLink} href="./buy">
            Buy
          </a>
          <a
            className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
            href="#"
          >
            Sell
          </a>
          <a className={HeaderStyles.headerLink} href="./account">
            Profile
          </a>
        </div>
      </header>

      <div className={styles.newOfferSection}>
        <div className={styles.newOffer}>
          <h1 className={styles.formTitle}>Make a new sale</h1>
          <form onSubmit={handleSubmit} className={styles.newOfferForm}>
            <label className={styles.textShadow}>Title:</label>
            <input
              required
              className={styles.inputArea}
              placeholder="Product name"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
            <br />

            <label className={styles.textShadow}>Content:</label>
            <textarea
              required
              placeholder="Description"
              className={styles.inputArea}
              value={content}
              onChange={handleContentChange}
              rows="4"
            />
            <br />

            <label className={styles.textShadow}>Price in dollars:</label>
            <input
              placeholder="Price"
              required
              className={styles.inputArea}
              type="number"
              value={price}
              onChange={handlePriceChange}
              step="0.01" // Specify the step for floating-point numbers
            />
            <br />

            <label className={styles.textShadow}>Image:</label>
            <input
              required
              className={styles.inputArea}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <br />

            <button type="submit">Upload</button>
          </form>
        </div>

        <p className={styles.formDesc}>
          Welcome to our Product Offer Submission Form, where you can
          effortlessly share your exciting product offerings with the community.
          Whether you're a supplier, manufacturer, or just have an exceptional
          product to propose, this user-friendly form makes it easy for you to
          showcase your offerings and connect with potential buyers.
        </p>
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
                <a className={FooterStyles.link} href="#">
                  Sell
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="./buy">
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
}

export default CreatePost;
