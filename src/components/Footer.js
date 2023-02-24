import logo from "./../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer class="bg-dark p-3 mt-auto">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 text-center text-md-start mb-md-0">
            <img
              class="light-mode-item navbar-brand-item"
              style={{ height: "2rem" }}
              src={logo}
              alt="logo"
            />
          </div>

          <div class="col-md-4 mb-md-0">
            <div class="text-center text-white">
              Copyrights ©2021 Komek. All rights reserved.
            </div>
          </div>
          <div class="col-md-4">
            <ul class="list-inline mb-0 text-center text-md-end">
              {/* <li class="list-inline-item ms-2">
                <a href="https://www.facebook.com/dsacademykz">
                  <i class="text-white fab fa-facebook"></i>
                </a>
              </li> */}

              <li class="list-inline-item ms-2">
                <a href="https://wa.me/+77758887001">
                  <i class="text-white fab fa-telegram"></i>
                </a>
              </li>
              <li class="list-inline-item ms-2">
                <a href="https://t.me/+77758887001">
                  <i class="text-white fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
