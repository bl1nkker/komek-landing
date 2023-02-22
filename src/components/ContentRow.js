const ContentRow = ({ LeftContent, RightContent, changeBg }) => {
  return changeBg ? (
    <section className="bg-success bg-opacity-25 d-xl-flex justify-content-between align-items-center row g-0 p-5">
      <div className="col-lg-5">
        <LeftContent />
      </div>

      <div className="col-xl-6 col-lg-7">
        <RightContent />
      </div>
    </section>
  ) : (
    <section className="d-xl-flex justify-content-xl-between align-items-xl-center row g-0 p-5">
      <div className="col-lg-5">
        <LeftContent />
      </div>

      <div className="col-xl-6 col-lg-7">
        <RightContent />
      </div>
    </section>
  );
};

export default ContentRow;
