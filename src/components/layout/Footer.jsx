const Footer = () => {
  return (
    <div className="container-fluid bg-black text-light">
      <div className="row pt-5 pb-2 ps-lg-5">
        <h1>tickete</h1>
      </div>
      <hr />
      <div className="d-flex ps-lg-5 pt-3 pb-3 flex-wrap-reverse">
        <div>
          <p className="text-secondary">Made with ❤️ </p>
        </div>
        <div className="d-flex ">
          <ul className="d-flex flex-wrap row-gap-1 gap-4 gap-lg-5">
            <li>Privacy policy</li>
            <li>Terms of usage</li>
            <li>Cancellation policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
