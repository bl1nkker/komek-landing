import logo from "./../assets/images/logo.svg";

const Header = () => {
  return (
    <header class="d-flex justify-content-between align-items-center p-3 shadow-lg bg-body">
      <a class="navbar-brand" href="/">
        <img
          class="light-mode-item navbar-brand-item"
          style={{ height: "4rem" }}
          src={logo}
          alt="logo"
        />
      </a>
      {/* <ul>
      <li><a href='#id'>About us</a></li>
      <li><a href='#id'>Causes</a></li>
      <li><a href='#id'>Who we are</a></li>
    </ul> */}
      <a className="btn btn-success" href="#form">
        Join Us
      </a>
    </header>
  );
};

export default Header;
