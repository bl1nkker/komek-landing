import "./App.css";
import "./styles/index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ContentRow from "./components/ContentRow";
import Testimonial from "./components/Testimonial";
import FeedbackForm from "./components/FeedbackForm";
import Footer from "./components/Footer";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5QpDxmaU8xWu7_tlvMHXGHg2h08qKqIc",
  authDomain: "komek-app.firebaseapp.com",
  projectId: "komek-app",
  storageBucket: "komek-app.appspot.com",
  messagingSenderId: "869374547385",
  appId: "1:869374547385:web:cad6bf191a4ac8d3979268",
  measurementId: "G-Q15Q8XSPCQ",
};

// Initialize Firebase

function App() {
  const createFeedback = async (email, message) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const feedbacksRef = collection(db, "feedbacks");
    const feedback = {
      email,
      message,
    };
    await addDoc(feedbacksRef, feedback);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <ContentRow LeftContent={AboutUsLeft} RightContent={AboutUsRight} />
        <ContentRow
          changeBg={true}
          LeftContent={BusinessModelLeft}
          RightContent={BusinessModelRight}
        />
        <Testimonial />
        <FeedbackForm createFeedback={createFeedback} />
      </main>
      <Footer />
    </div>
  );
}

// About us
const AboutUsLeft = () => {
  return (
    <img
      alt=""
      style={{ width: "100%", borderRadius: "1rem" }}
      class="img-fluid d-lg-block d-none"
      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
    />
  );
};

const AboutUsRight = () => {
  return (
    <div>
      <h2>How we're making Difference?</h2>
      <p>
        Every year, thousands of children around the world face illnesses that
        can have a negative impact on their education and life in general. We
        believe that every child has the right to an education, no matter what
        challenges they have to overcome. Our project is dedicated to helping
        children who face illness receive a quality education. We believe that
        education is the foundation for a successful life and career in the
        future. Join our community to help sick children get the education they
        deserve
      </p>

      <div className="d-flex flex-column ps-5 pe-5">
        <div className="d-flex justify-content-between align-items-center">
          <svg
            className="text-success"
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.75 3.94c1-.72 2.16-1.08 3.47-1.08c.72 0 1.51.19 2.37.59c.86.39 1.54.85 2.04 1.38c1.03 1.28 1.46 2.77 1.31 4.47c-.16 1.7-.72 3.03-1.69 3.97l-7.59 7.59c-.19.19-.43.28-.71.28c-.28 0-.51-.09-.7-.28a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.25-.22.25-.45 0-.7c-.25-.25-.48-.25-.7 0l-4.59 4.59a.95.95 0 0 1-.71.28c-.28 0-.51-.09-.7-.28a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.27-.25.27-.5 0-.75c-.23-.25-.45-.25-.7 0l-4.59 4.64a.98.98 0 0 1-.71.28c-.28 0-.52-.09-.73-.28c-.2-.19-.3-.42-.3-.7c0-.28.11-.53.33-.75l4.6-4.6c.25-.25.25-.48 0-.7c-.25-.22-.49-.22-.71 0L6.28 14.5c-.22.2-.45.31-.7.31c-.28 0-.52-.1-.7-.31c-.19-.2-.29-.44-.29-.72c0-.28.1-.51.29-.7C7.94 10 9.83 8.14 10.55 7.45l3.56 3.52c.39.37.84.56 1.39.56c.7 0 1.25-.28 1.66-.84c.28-.41.38-.86.3-1.36c-.08-.5-.29-.92-.63-1.27l-4.08-4.12m2.06 6.33L10.55 6l-7.08 7.08c-.84-.85-1.32-2.15-1.43-3.92c-.11-1.76.37-3.29 1.43-4.57c1.19-1.18 2.61-1.78 4.26-1.78c1.66 0 3.07.6 4.22 1.78l4.27 4.27c.19.19.28.42.28.7c0 .28-.09.52-.28.71c-.19.18-.42.28-.72.28c-.27 0-.5-.1-.69-.28Z"
            />
          </svg>

          <p className="ms-5">
            Our project is dedicated to helping children who suffer from various
            diseases. We raise money for treatment and provision medical care
            for these children. Your support can save lives and give hope for
            the future.
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <svg
            className="text-success"
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M7.879 7.5c.504-.61 1.267-1 2.121-1c.854 0 1.617.39 2.121 1a2.75 2.75 0 1 1-4.243 0Zm5.871 1.75c0-.632-.156-1.228-.432-1.75H17.5A1.5 1.5 0 0 1 19 9v.5c0 1.587-1.206 3.212-3.315 3.784A2.5 2.5 0 0 0 13.5 12h-.95a3.74 3.74 0 0 0 1.2-2.75ZM13.5 13a1.496 1.496 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4c-3.14 0-5-2.029-5-4v-.5A1.496 1.496 0 0 1 6.5 13h7ZM1 9.5c0 1.587 1.206 3.212 3.315 3.784A2.5 2.5 0 0 1 6.5 12h.95a3.74 3.74 0 0 1-1.2-2.75c0-.632.156-1.228.433-1.75H2.5A1.5 1.5 0 0 0 1 9v.5Zm7.75-5.75a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0Zm8 0a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0Z"
            />
          </svg>

          <p className="ms-5">
            Join our community and be part of our mission. Together we can
            achieve more and give children suffering from illness a hope for the
            future. We firmly believe that every child has the right to health
            and a happy life.
          </p>
        </div>
      </div>
    </div>
  );
};

// Business Model
const BusinessModelLeft = () => {
  return <h2 className="section-title">How can I Join?</h2>;
};
const BusinessModelRight = () => {
  const steps = [
    "Download the app from the App Store or Google Play and register.",
    "Subscribe for any convenient period (monthly or annually).",
    "Choose the amount of charity donation - one 5$ or more.",
    "Every month, 10% from your subscription will be donated to charity, and the remaining money will be converted into app points.",
    "Use accumulated app points to purchase unique app merchandise.",
    "Enjoy using the app and know that you're helping children in need!",
  ];
  return (
    <ol class="list-group list-group-numbered list-group-flush">
      {steps.map((step, index) => (
        <li
          key={index}
          class="list-group-item d-flex justify-content-start align-items-start list-group-item-success"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">{step}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default App;
