import FormPlaceholder from "./../assets/images/form-placeholder.jpeg";
import { useState } from "react";

const FeedbackForm = ({ createFeedback }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createFeedback(email, message);
    setIsSubmitted(true);
  };
  return (
    <section
      id="form"
      class="d-xl-flex justify-content-xl-between align-items-xl-center row g-0 p-5 bg-success bg-opacity-25"
    >
      <div className="col-lg-5">
        <p>CALL TO ACTION</p>
        <h1>Together, we can change lives!</h1>
        {isSubmitted ? (
          <p className="text-success">Thank you for your feedback!</p>
        ) : (
          <form className="d-flex flex-column justify-content-center align-items-start">
            <div class="mb-3 mt-3 col-12">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Leave your email"
              />
            </div>
            <div class="mb-3 col-12">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Leave your feedback here"
              ></textarea>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Send
            </button>
          </form>
        )}
      </div>

      <div className="col-xl-6 col-lg-7">
        <img
          class="img-fluid d-lg-block d-none"
          style={{ borderRadius: "1rem" }}
          src={FormPlaceholder}
          alt=""
        />
      </div>
    </section>
  );
};

export default FeedbackForm;
