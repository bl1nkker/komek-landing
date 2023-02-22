const Footer = () => {
  return (
    <footer class="bg-dark p-3 mt-auto">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 text-center text-md-start mb-md-0">
            <h5 className="text-white m-0">Komek</h5>
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
                <a href="https://www.instagram.com/dsacademy.kz/">
                  <i class="text-white fab fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item ms-2">
                <a href="https://t.me/+TavLTORVZ55XAavu">
                  <i class="text-white fab fa-telegram"></i>
                </a>
              </li>
              <li class="list-inline-item ms-2">
                <a href="https://wa.link/g3w44y">
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
