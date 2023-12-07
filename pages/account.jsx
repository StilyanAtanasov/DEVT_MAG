import React, { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
  reauthenticateWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Link from "next/link";
import { app } from "../lib/firebase";
import toast from "react-hot-toast";
import styles from "../styles/account.module.css";
import HeaderStyles from "../styles/header.module.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const username = currentUser.displayName || currentUser.email;

        const userPostsQuery = query(
          collection(db, "posts"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(userPostsQuery);

        if (!querySnapshot.empty) {
          const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUserPosts(posts);
        }
      } else {
        setUser(null);
        setUserPosts([]);
      }
    });
  }, [auth, db]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Sign out successful");
    } catch (error) {
      console.error(error.message);
      toast.error("Error signing out");
    }
  };

  // Function to delete the user's profile and username document
  const deleteUserProfile = async (user, router) => {
    const auth = getAuth();
    const firestore = getFirestore();
    const username = user.displayName || user.email;

    try {
      // Check the user's sign-in provider
      const providerId = user.providerData[0].providerId;
      let credential;

      if (providerId === "password") {
        // If the user is signed in with email/password, prompt for password
        const password = prompt("Please enter your password");
        if (!password) {
          toast.error("Password not provided. Profile not deleted.");
          return;
        }
        credential = EmailAuthProvider.credential(user.email, password);
      } else if (providerId === "google.com") {
        // If the user is signed in with Google, reauthenticate with Google sign-in provider
        const provider = new GoogleAuthProvider();
        await reauthenticateWithPopup(auth.currentUser, provider);
      } else {
        // Unsupported sign-in provider, show error or handle as needed
        toast.error("Unsupported sign-in provider. Profile not deleted.");
        return;
      }

      // If we have a credential, reauthenticate the user
      if (credential) {
        await reauthenticateWithCredential(auth.currentUser, credential);
      }

      // Delete the user's posts
      const userPostsQuery = query(
        collection(firestore, "posts"),
        where("username", "==", user.displayName)
      );
      const userPostsSnapshot = await getDocs(userPostsQuery);
      const batch = [];
      userPostsSnapshot.forEach((doc) => {
        batch.push(deleteDoc(doc.ref));
      });

      await Promise.all(batch);

      // Delete the user's profile document
      await deleteDoc(doc(firestore, "users", user.uid));

      // Delete the user from Firebase Authentication
      await auth.currentUser.delete();

      // Redirect the user to the home page or another appropriate page
      router.push("/");
    } catch (error) {
      toast.error("Error deleting user profile:", error);
    }
  };

  const handleDeleteProfile = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser && currentUser.emailVerified) {
      try {
        await auth.currentUser.reload();
        const refreshedUser = auth.currentUser;
        if (refreshedUser.emailVerified) {
          deleteUserProfile(refreshedUser, router);
        } else {
          toast.error(
            "User email verification state expired. Please sign in again."
          );
        }
      } catch (error) {
        toast.error("Error refreshing user authentication state:", error);
      }
    } else {
      toast.error("User authentication state expired. Please sign in again.");
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      await deleteDoc(postRef);

      setUserPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== postId)
      );
      toast.success("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Error deleting post");
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
            <span className={HeaderStyles.pageDescriberLow}>Your Account</span>
            <div className={HeaderStyles.headerNavLow}>
              <a className={HeaderStyles.headerLink} href="./">
                Home
              </a>
              <a className={HeaderStyles.headerLink} href="./buy">
                Buy
              </a>
              <a className={HeaderStyles.headerLink} href="./sell">
                Sell
              </a>
              <a
                className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
                href="#"
              >
                Profile
              </a>
            </div>
          </div>
        </div>

        <span className={HeaderStyles.pageDescriberHigh}>Your Account</span>

        <div className={HeaderStyles.headerNavHigh}>
          <a className={HeaderStyles.headerLink} href="./">
            Home
          </a>
          <a className={HeaderStyles.headerLink} href="./buy">
            Buy
          </a>
          <a className={HeaderStyles.headerLink} href="./sell">
            Sell
          </a>
          <a
            className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
            href="#"
          >
            Profile
          </a>
        </div>
      </header>

      {user ? (
        <div className={styles.userInfo}>
          <h1>Welcome, {user.displayName || user.email || user.uid}</h1>
          <div>
            <button className={styles.button} onClick={handleSignOut}>
              Sign Out
            </button>
            <button className={styles.button} onClick={handleDeleteProfile}>
              Delete Profile
            </button>
          </div>
          <div className={styles.userPosts}>
            <h2 className={styles.userPostsName}>Your Posts</h2>
            <ol type="I">
              {userPosts.map((post) => (
                <li key={post.id} className={styles.post}>
                  <div>
                    <Link className={styles.link} href={`/post/${post.id}`}>
                      <p className={styles.link}>
                        <h3 className={styles.desc}>
                          <span className={styles.descTitle}>
                            Product Name:{" "}
                          </span>
                          <span className={styles.descContent}>
                            {post.title}
                          </span>
                        </h3>
                      </p>
                    </Link>
                    <p className={styles.desc}>
                      <span className={styles.descTitle}>Description: </span>
                      <span className={styles.descContent}>{post.content}</span>
                    </p>
                    <button
                      className={styles.DelButton}
                      onClick={() => handleDeletePost(post.id)}
                    >
                      Delete post
                    </button>
                  </div>
                  <img
                    className={styles.descImg}
                    src={post.imageUrl}
                    alt="post IMG"
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
