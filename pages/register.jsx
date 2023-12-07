import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  EmailAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import styles from "../styles/register.module.css";
import toast from "react-hot-toast";
import { app } from "../lib/firebase";

const auth = getAuth(app);
const db = getFirestore(app);

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [showUsernameField, setShowUsernameField] = useState(true);
  const [isLogin, setIsLogin] = useState(true); // Add state for login/signup switch

  const router = useRouter();

  const toggleLoginSignup = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const userDocRef = doc(collection(db, "users"), user.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUsername(userData.username);
        } else {
          setShowUsernameField(true);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("succefuly signed in");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username) {
      setError("Please enter a username.");
      return;
    }

    const selectedRole = prompt("Choose your role (customer or seller):");
    if (selectedRole !== "customer" && selectedRole !== "seller") {
      setError("Invalid role selection.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast("Signup successful");

      // Set the user's chosen role during sign-up
      const userDocRef = doc(collection(db, "users"), userCredential.user.uid);
      const userData = {
        username: username,
        email: userCredential.user.email,
        role: selectedRole,
      };
      await setDoc(userDocRef, userData);

      setShowUsernameField(false);

      // Send the email verification link to the user
      await sendEmailVerification(userCredential.user);

      // Redirect to the email confirmation page
      router.push("/ConfirmEmail");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful");

      const user = userCredential.user;

      const userDocRef = doc(collection(db, "users"), user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        // User already exists in the database, so treat them as an existing user
      } else {
        // User does not exist in the database, so treat them as a new user
        const selectedRole = prompt("Choose your role (customer or seller):");

        if (selectedRole !== "customer" && selectedRole !== "seller") {
          setError("Invalid role selection.");
          return;
        }

        const username = prompt("Enter a username:");

        if (!username) {
          setError("Please enter a username.");
          return;
        }

        // Set the user's chosen role during sign-up
        const userData = {
          username: username,
          email: user.email,
          role: selectedRole,
        };
        await setDoc(userDocRef, userData);
      }

      toast.success("Sign in succesfull");
      setEmail("");
      setPassword("");
      setError("");
      router.push("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  if (!user) {
    return (
      <div>
        {isLogin ? (
          <>
            <div className={styles.all}>
              <div className={styles.container}>
                <div className={styles.text}>Signup Form</div>

                <div className={styles.inputData}>
                  <input
                    className={styles.input}
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className={styles.underline}></div>
                  <label className={styles.label} for="">
                    Email Address
                  </label>
                </div>
                <div className={styles.inputData}>
                  <input
                    className={styles.input}
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className={styles.underline}></div>
                  <label className={styles.label} for="">
                    Password
                  </label>
                </div>

                {showUsernameField && (
                  <>
                    <div className={styles.inputData}>
                      <input
                        className={styles.input}
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <div className={styles.underline}></div>
                      <label className={styles.label} for="">
                        Business name
                      </label>
                    </div>
                  </>
                )}
                <form onSubmit={handleSignup} className={styles.form}>
                  <div>
                    <div className={`${styles.form_row} ${styles.submit_btn}`}>
                      <div className={styles.inputData}>
                        <div className={styles.inner}></div>
                        <input
                          className={styles.input}
                          type="submit"
                          value="Sign up"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <button
                  onClick={handleGoogleSignIn}
                  className={styles.googleBTN}
                >
                  <i class="fa-brands fa-google"></i> Google Sign-In
                </button>

                <p className={styles.additionalText}>
                  Already have an account?{" "}
                  <a onClick={toggleLoginSignup} className={styles.clickable}>
                    {isLogin ? "Log in!" : "Sign up!"}
                  </a>
                </p>
                {error && <p>{error}</p>}
              </div>

              <img
                className={styles.img}
                src="/devt-mag-high-resolution-logo-transparent.png"
                alt=""
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.all}>
              <div className={styles.container}>
                <div className={styles.text}>Login Form</div>

                <div className={styles.inputData}>
                  <input
                    className={styles.input}
                    type="email"
                    autoComplete="email"
                    required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className={styles.underline}></div>
                  <label className={styles.label} for="">
                    Email Address
                  </label>
                </div>
                <div className={styles.inputData}>
                  <input
                    className={styles.input}
                    type="password"
                    required="true"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className={styles.underline}></div>
                  <label className={styles.label} for="">
                    Password
                  </label>
                </div>
                <form onSubmit={handleLogin} className={styles.form}>
                  <div className={`${styles.form_row} ${styles.submit_btn}`}>
                    <div className={styles.inputData}>
                      <div className={styles.inner}></div>
                      <input
                        className={styles.input}
                        type="submit"
                        value="Log in"
                      />
                    </div>
                  </div>
                </form>

                <button
                  onClick={handleGoogleSignIn}
                  className={styles.googleBTN}
                >
                  <i class="fa-brands fa-google"></i> Google Sign-In
                </button>

                <p className={styles.additionalText}>
                  Don't have an account?{" "}
                  <a onClick={toggleLoginSignup} className={styles.clickable}>
                    {isLogin ? "Log in!" : "Sign up!"}
                  </a>
                </p>

                {error && <p>{error}</p>}
              </div>

              <img
                className={styles.img}
                src="/devt-mag-high-resolution-logo-transparent.png"
                alt="Logo"
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default LoginForm;
