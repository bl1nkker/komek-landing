import Testimonials1 from "./../assets/images/testimonials-1.jpeg";
import Testimonials2 from "./../assets/images/testimonials-2.jpg";
import Testimonials3 from "./../assets/images/testimonials-3.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Miras Dolayev",
    position: "CEO, MOST Academy",
    avatar: Testimonials1,
    text: "This project has the potential to become popular and successful. Team have an interesting idea that combines elements of charity, loyalty and exclusivity, which can attract a large number of users.",
  },
  {
    id: 1,
    name: "Saltanat Berdikulova",
    position: "Senior Specialist, Kcell АО",
    avatar: Testimonials2,
    text: "Komek App seems very interesting and innovative. The concept of a paid subscription with unique points for in-app purchases is original. Also, given the inclusion of charity in the project, your application can become not only entertaining, but also socially significant, attracting users who want to do good.",
  },
  {
    id: 1,
    name: "Diana Zharikova",
    position: "Head of Treasury, Al Hilal Bank Kazakhstan",
    avatar: Testimonials3,
    text: "I, as a person who has devoted his whole life to charity, welcome your project with pleasure, which combines the possibilities of donation and loyalty in one application. I understand how important it is to have tools that can help people do good and help those in need, and your app is a great example of how technology can be used to achieve charitable causes",
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
