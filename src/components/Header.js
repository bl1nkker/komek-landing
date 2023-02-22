const Header = () => {
  return (
    <header class="d-flex justify-content-between align-items-center p-3 shadow-lg bg-body">
      <span>Komek</span>
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
