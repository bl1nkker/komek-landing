const ContentRow = ({ LeftContent, RightContent }) => {
  return (
    <section class="d-xl-flex justify-content-xl-between align-items-xl-center row g-0 p-5">
      <div className="col-md-5">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
        />
      </div>

      <div className="col-xl-6 col-md-7">
        <h2>Our Purpose</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel tincidunt lacinia, tortor odio tincidunt mauris, eget aliquam
          nisl lorem quis nunc. Nullam euismod, nisl vel tincidunt lacinia,
          tortor odio tincidunt mauris, eget aliquam nisl lorem quis nunc.
        </p>
      </div>
    </section>
  );
};

export default ContentRow;
