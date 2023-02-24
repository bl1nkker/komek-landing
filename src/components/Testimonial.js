import Testimonials1 from "./../assets/images/testimonials-1.jpeg";
import Testimonials2 from "./../assets/images/testimonials-2.jpg";
import Testimonials3 from "./../assets/images/testimonials-3.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Miras Dolayev",
    position: "CEO, MOST Academy",
    avatar: Testimonials1,
    text: "I've been using Komek for a few months now, and I can honestly say that it's changed the way I think about giving back. I used to struggle with finding the time and motivation to research charities and make donations, but Komek takes care of everything for me. And it's not just about giving back – I feel like I'm also investing in my own well-being by treating myself to some of the self-love gifts. Thank you, Komek, for making a difference in the world and in my life.",
  },
  {
    id: 1,
    name: "Saltanat Berdikulova",
    position: "Head of educational projects",
    avatar: Testimonials2,
    text: "I never thought donating could be so easy and satisfying until I found Komek. It feels great to know that I'm making a difference in causes that matter to me, and I love that I can also invest in my own happiness with the self-love gifts. Plus, the app is so user-friendly that I hardly even notice the monthly donations coming out of my account. Highly recommend!",
  },
  {
    id: 1,
    name: "Diana Zharikova",
    position: "Head of Treasury, Al Hilal Bank Kazakhstan",
    avatar: Testimonials3,
    text: "As someone who's always looking for ways to make a positive impact, Komek is a dream come true. I love that I can support the causes I care about without any extra effort on my part – and that I can also treat myself to some awesome products along the way. The app is so simple and straightforward, I barely even have to think about it. Thank you, Komek team, for creating such a wonderful platform!",
  },
];

const Testimonial = () => {
  return (
    <section className="p-5">
      <h4 className="section-title">Testimonials</h4>
      <h2 className="section-title">What people say about us</h2>
      <div className="d-flex flex-column flex-lg-row justify-content-around mt-5">
        {testimonialData.map((testimonial) => (
          <div className="card col-lg-3">
            <div className="card-body">
              <p className="card-text">{testimonial.text}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <img
                class="avatar-img rounded-circle img-fluid"
                src={testimonial.avatar}
                alt="avatar"
                style={{ height: "4rem", width: "4rem" }}
              />
              <div className="d-flex flex-column justify-content-center m-0">
                <h6>{testimonial.name}</h6>
                <p className="m-0">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
