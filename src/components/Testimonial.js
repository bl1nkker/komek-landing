const testimonialData = [
  {
    id: 1,
    name: "Yegor Mansurov",
    position: "CEO, Google",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies lacinia, nisl nunc aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, ut aliquet nisl nisl sit amet nisl.",
  },
  {
    id: 1,
    name: "Yegor Mansurov",
    position: "CEO, Google",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies lacinia, nisl nunc aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, ut aliquet nisl nisl sit amet nisl.",
  },
  {
    id: 1,
    name: "Yegor Mansurov",
    position: "CEO, Google",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies lacinia, nisl nunc aliquet nisl, ut aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, ut aliquet nisl nisl sit amet nisl.",
  },
];

const Testimonial = () => {
  return (
    <section className="p-5">
      <h4 className="section-title">Testimonials</h4>
      <h2 className="section-title">What people say about us</h2>
      <div className="d-flex flex-column flex-lg-row justify-content-around mt-5">
        {testimonialData.map((testimonial) => (
          <div className="card col-lg-2">
            <div className="card-body">
              <p className="card-text">{testimonial.text}</p>
              <div className="card-footer d-flex justify-content-between">
                <img
                  class="avatar-img rounded-circle img-fluid"
                  src={testimonial.avatar}
                  alt="avatar"
                  width={48}
                />
                <div className="d-flex flex-column justify-content-center m-0">
                  <h6>{testimonial.name}</h6>
                  <p className="m-0">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
